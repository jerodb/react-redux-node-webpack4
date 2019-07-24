import CopyWebpackPlugin from 'copy-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import HtmlWebpackPugPlugin from 'html-webpack-pug-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import path from 'path'
import webpack from 'webpack'
import {
  AUTH_CLIENT_ID, BASE_URL, IMAGES_URL, RECAPTCHA_KEY
} from './config'

const buildPath = path.join(__dirname, 'dist')
const sourcePath = path.join(__dirname, 'src')

const templateParameters = {
  imagesUrl: IMAGES_URL,
  includeAuth: !!AUTH_CLIENT_ID,
  includeRecaptcha: !!RECAPTCHA_KEY,
}

export default (env, args) => {
  const isDev = args.mode === 'development'

  return ({
    resolve: {
      extensions: ['*', '.js', '.jsx', '.json']
    },
    mode: args.mode,
    // https://webpack.js.org/guides/production/#source-mapping
    // https://webpack.js.org/configuration/devtool/
    devtool: 'source-map',
    entry: path.join(sourcePath, 'index'),
    target: 'web',
    node: { fs: 'empty' },
    output: {
      path: buildPath,
      publicPath: `${BASE_URL}`,
      filename: path.join('js', 'bundle.js')
    },
    devServer: isDev ? {
      port: 3000,
      contentBase: './dist',
      hot: true
    } : {},
    plugins: [
      new webpack.HotModuleReplacementPlugin(),

      // webpack.DefinePlugin: Creates global constants which are configured at compile time.
      /*
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      */

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
        template: path.join(sourcePath, 'templates', 'index.pug'),
        ...templateParameters
      }),

      new HtmlWebpackPugPlugin(),

      // Generate an external css file
      new MiniCssExtractPlugin({
        filename: path.join('css', 'styles.css')
      }),

      // ExtractTextPlugin: moves all the require/import "[fileName].css" in entry chunks
      // into a separate single CSS file.
      new ExtractTextPlugin({
        filename: path.join('css', 'styles.css'),
        allChunks: true
      }),

      // CopyWebpackPlugin: copy files or dirs from one location to another.
      new CopyWebpackPlugin([
        {
          from: path.join(sourcePath, 'assets'),
          to: path.join(buildPath)
        },
        {
          from: path.join(__dirname, 'node_modules', 'auth0-js', 'build', 'auth0.js'),
          to: path.join(buildPath, 'js', 'auth0.js')
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
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  localIdentName: '[hash:8]',
                  modules: true,
                  sourceMap: true
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  data: `$publicUrl:'${BASE_URL}';$colorY:#e2d62d;`
                }
              }
            ]
          })
        },
        {
          test: /\.css$/,
          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader'
          ]
        },
      ]
    }
  }
  )
}
