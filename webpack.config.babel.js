import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import path from 'path'
import { PUBLIC_URL, BASE_URL } from './config'

const buildPath = path.join(__dirname, 'dist')
const sourcePath = path.join(__dirname, 'src')

export default {
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json']
  },
  devtool: 'source-map', // more info:https://webpack.js.org/guides/production/#source-mapping and https://webpack.js.org/configuration/devtool/
  entry: path.join(sourcePath, 'index'),
  target: 'web',
  output: {
    path: buildPath,
    publicPath: `${PUBLIC_URL}/`,
    filename: '[name].[hash].js'
  },
  devServer: {
    port: 3000,
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // Creates global constants which can be configured at compile time.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        BASE_URL: JSON.stringify(BASE_URL),
        PUBLIC_URL: JSON.stringify(PUBLIC_URL)
      }
    }),
    /*
    new webpack.ProvidePlugin({
      Promise: 'es6-promise',
      fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch',
    }),
    */
    // Generate an external css file with a hash in the filename
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    }),
    // Generate a .pug file that includes all webpack bundles in the body using script tags.
    new HtmlWebpackPlugin({
      template: path.join(sourcePath, 'views', 'index.pug'),
      // filename: path.join('views', 'layout.pug')
    }),
    // new HtmlWebpackPugPlugin(),
    // Moves all the require/import "[fileName].css" in entry chunks
    // into a separate single CSS file.
    new ExtractTextPlugin({
      filename: 'styles.[hash:8].css',
      allChunks: true
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(sourcePath, 'public'),
        to: path.join(buildPath, 'public')
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
                data: `$publicUrl:'${PUBLIC_URL}';$colorY:#e2d62d;`
              }
            }
          ]
        })
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
          /* {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('cssnano'), require('autoprefixer')],
              sourceMap: true,
            },
          }, */
        ]
      }
    ]
  }
}
