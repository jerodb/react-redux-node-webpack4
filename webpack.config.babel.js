// NOTE: webpack v4+ will minify your code by default in production mode.
import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import HtmlWebpackPugPlugin from 'html-webpack-pug-plugin'
import path from 'path'
import webpack from 'webpack'
import {
  BASE_NAME, HOST, IMAGES_PATH, NODE_ENV, PORT
} from './config'

export default () => ({
  // https://webpack.js.org/configuration/mode/
  mode,
  // https://webpack.js.org/configuration/devtool/
  devtool: isDev ? 'eval-source-map' : 'source-map',
  // https://webpack.js.org/configuration/entry-context/#entry
  entry: entryPoint,
  resolve: {
    // https://webpack.js.org/configuration/resolve/#resolveextensions
    extensions: ['.js', '.jsx', '.json']
  },
  // https://webpack.js.org/configuration/output/
  output: {
    filename: outputBundle,
    path: buildPath,
    publicPath: `${BASE_NAME}`,
  },
  // https://webpack.js.org/configuration/plugins/
  plugins,
  module: {
    // https://webpack.js.org/configuration/module/#modulerules
    rules
  },
  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    contentBase: buildPath,
    port: PORT,
  },
})

const buildPath = path.join(__dirname, 'dist')
const sourcePath = path.join(__dirname, 'src')
const assets = path.join(sourcePath, 'assets')
const entryPoint = path.join(sourcePath, 'index.js')
const outputBundle = path.join('js', 'bundle.js')
const template = path.join(sourcePath, 'templates', 'index.pug')

const mode = NODE_ENV
const isDev = mode === 'development'

const plugins = [
  // https://webpack.js.org/plugins/define-plugin/
  // Create global constants which are configured at compile time.
  new webpack.DefinePlugin({
    'process.env': {
      BASE_NAME: JSON.stringify(BASE_NAME),
      NODE_ENV: JSON.stringify(NODE_ENV),
      HOST: JSON.stringify(HOST),
      IMAGES_PATH: JSON.stringify(IMAGES_PATH),
    }
  }),

  // https://webpack.js.org/plugins/html-webpack-plugin/
  // Generate an .html file that includes webpack bundles in the body.
  new HtmlWebpackPlugin({
    filename: 'index.html', // output template
    hash: !isDev, // automagically hashes bundles
    imagesPath: `${HOST}${IMAGES_PATH}`,
    template, // original template
  }),

  // https://www.npmjs.com/package/html-webpack-pug-plugin
  new HtmlWebpackPugPlugin(),

  // https://webpack.js.org/plugins/copy-webpack-plugin/
  // Copy files and dirs from one location to another.
  new CopyWebpackPlugin([
    {
      from: assets,
      to: buildPath
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
