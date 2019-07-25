// NOTE: webpack v4+ will minify your code by default in production mode.
import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import HtmlWebpackPugPlugin from 'html-webpack-pug-plugin'
import path from 'path'
import webpack from 'webpack'
import {
  BASE_URL, HOST, IMAGES_URL, NODE_ENV, PORT, RECAPTCHA_KEY,
  AUTH_CLIENT_ID, AUTH_DOMAIN, AUTH_RESPONSE_TYPE, AUTH_REDIRECT_URI, AUTH_SCOPE,
  MYSQL_DB, MYSQL_USER, MYSQL_PASS, MYSQL_HOST, MYSQL_PORT
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
    devtool: isDev ? 'eval-source-map' : 'source-map',
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
      new webpack.DefinePlugin({
        'process.env': {
          BASE_URL: JSON.stringify(BASE_URL),
          ENV: JSON.stringify(NODE_ENV),
          HOST: JSON.stringify(HOST),
          IMAGES_URL: JSON.stringify(IMAGES_URL),
          PORT: JSON.stringify(PORT),
          RECAPTCHA_KEY: JSON.stringify(RECAPTCHA_KEY),

          AUTH_CLIENT_ID: JSON.stringify(AUTH_CLIENT_ID),
          AUTH_DOMAIN: JSON.stringify(AUTH_DOMAIN),
          AUTH_RESPONSE_TYPE: JSON.stringify(AUTH_RESPONSE_TYPE),
          AUTH_REDIRECT_URI: JSON.stringify(AUTH_REDIRECT_URI),
          AUTH_SCOPE: JSON.stringify(AUTH_SCOPE),

          MYSQL_DB: JSON.stringify(MYSQL_DB),
          MYSQL_USER: JSON.stringify(MYSQL_USER),
          MYSQL_PASS: JSON.stringify(MYSQL_PASS),
          MYSQL_HOST: JSON.stringify(MYSQL_HOST),
          MYSQL_PORT: JSON.stringify(MYSQL_PORT),
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
        template: path.join(sourcePath, 'templates', 'index.pug'),
        ...templateParameters
      }),

      new HtmlWebpackPugPlugin(),

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
      ]
    }
  }
  )
}
