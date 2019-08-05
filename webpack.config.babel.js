// NOTE: webpack v4+ will minify your code by default in production mode.
import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import HtmlWebpackPugPlugin from 'html-webpack-pug-plugin'
import path from 'path'
import webpack from 'webpack'
import {
  BASE_NAME, HOST, IMAGES_PATH, NODE_ENV
} from './config'

const buildPath = path.join(__dirname, 'dist')
const sourcePath = path.join(__dirname, 'src')
const entryPoint = path.join(sourcePath, 'index')
const outputBundle = path.join('js', 'bundle.js')

const mode = NODE_ENV
const isDev = mode === 'development'

export default () => ({
  resolve: { extensions: ['*', '.js', '.jsx', '.json'] },
  mode,
  devtool: isDev ? 'eval-source-map' : 'source-map',
  entry: entryPoint,
  target: 'web',
  node: { fs: 'empty' },
  output: {
    filename: outputBundle,
    path: buildPath,
    publicPath: `${BASE_NAME}`,
  },
  devServer: isDev ? {
    contentBase: buildPath,
    hot: true,
    port: 3000,
  } : {},
  plugins,
  module: { rules },
})

const plugins = [
  isDev ? new webpack.HotModuleReplacementPlugin() : {},

  // webpack.DefinePlugin: Creates global constants which are configured at compile time.
  new webpack.DefinePlugin({
    'process.env': {
      BASE_NAME: JSON.stringify(BASE_NAME),
      NODE_ENV: JSON.stringify(NODE_ENV),
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
]

const rules = [
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
