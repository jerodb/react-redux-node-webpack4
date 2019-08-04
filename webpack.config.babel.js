// NOTE: webpack v4+ will minify your code by default in production mode.
import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import HtmlWebpackPugPlugin from 'html-webpack-pug-plugin'
import path from 'path'
import webpack from 'webpack'
import {
  BASE_NAME, ENV, HOST, IMAGES_PATH
} from './config'

const buildPath = path.join(__dirname, 'dist')
const sourcePath = path.join(__dirname, 'src')

const mode = ENV

export default () => {
  const isDev = mode === 'development'

  return ({
    resolve: {
      extensions: ['*', '.js', '.jsx', '.json']
    },
    mode,
    devtool: isDev ? 'eval-source-map' : 'source-map',
    entry: path.join(sourcePath, 'index'),
    target: 'web',
    node: { fs: 'empty' },
    output: {
      path: buildPath,
      publicPath: `${BASE_NAME}`,
      filename: path.join('js', 'bundle.js')
    },
    devServer: isDev ? {
      port: 3000,
      contentBase: './dist',
      hot: true
    } : {},
    plugins: [
      isDev ? new webpack.HotModuleReplacementPlugin() : {},

      // webpack.DefinePlugin: Creates global constants which are configured at compile time.
      new webpack.DefinePlugin({
        'process.env': {
          BASE_NAME: JSON.stringify(BASE_NAME),
          ENV: JSON.stringify(ENV),
          HOST: JSON.stringify(HOST),
          IMAGES_PATH: JSON.stringify(IMAGES_PATH),
        }
      }),

      /*
      new webpack.ProvidePlugin({
        Promise: 'es6-promise',
        fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch',
      }),
      */

      /*
      * Generate a .html file that includes
      * all webpack bundles in the body using script tags and styles using link tags.
      */
      new HtmlWebpackPlugin({
        filename: 'index.html',
        hash: !isDev,
        imagesPath: `${HOST}${IMAGES_PATH}`,
        template: path.join(sourcePath, 'templates', 'index.pug'),
      }),

      new HtmlWebpackPugPlugin(),

      // CopyWebpackPlugin: copy files or dirs from one location to another.
      new CopyWebpackPlugin([
        {
          from: path.join(sourcePath, 'assets'),
          to: path.join(buildPath)
        },
      ])
    ],
    module: {
      rules: [
        {
          test: /\.pug/,
          use: ['pug-loader']
        },
        {
          test: /\.(jsx|js)?$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.eot(\?v=\d+.\d+.\d+)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                name: '[name].[ext]'
              },
            },
          ],
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                mimetype: 'application/font-woff',
                name: '[name].[ext]'
              }
            }
          ]
        },
        {
          test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                mimetype: 'application/octet-stream',
                name: '[name].[ext]'
              }
            }
          ]
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                mimetype: 'image/svg+xml',
                name: '[name].[ext]'
              }
            }
          ]
        },
        {
          test: /\.(jpe?g|png|gif|ico)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]'
              }
            }
          ]
        },
      ]
    }
  }
  )
}
