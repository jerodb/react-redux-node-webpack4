// NOTE: webpack v4+ will minify your code by default in production mode.
import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import HtmlWebpackPugPlugin from 'html-webpack-pug-plugin'
import path from 'path'
import webpack from 'webpack'
import {
  BASE_PATH, GAMES_HOST, HOST, NODE_ENV, PORT, ROOT_DIR
} from './config'

export default () => ({
  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    contentBase: buildPath,
    hot: true,
    port: PORT,
  },
  // https://webpack.js.org/configuration/devtool/
  devtool: isDev ? 'eval-source-map' : 'source-map',
  // https://webpack.js.org/configuration/entry-context/#entry
  entry: entryPoint,
  // https://webpack.js.org/configuration/mode/
  mode,
  module: {
    // https://webpack.js.org/configuration/module/#modulerules
    rules
  },
  // https://webpack.js.org/configuration/output/
  output: {
    filename: outputBundle,
    path: buildPath,
    publicPath: `${BASE_PATH}`,
  },
  // https://webpack.js.org/configuration/plugins/
  plugins,
  resolve: {
    // https://webpack.js.org/configuration/resolve/#resolveextensions
    extensions: ['.js', '.jsx', '.json']
  },
  target: 'web',
})

const sourcePath = path.join(__dirname, 'src')
const assets = path.join(sourcePath, 'assets')
const buildPath = ROOT_DIR
const entryPoint = path.join(sourcePath, 'index.js')
const outputBundle = path.join('js', 'bundle.js')
const template = path.join(sourcePath, 'templates', 'index.pug')

const mode = NODE_ENV || 'development'
const isDev = mode === 'development'

const plugins = [
  // https://webpack.js.org/plugins/define-plugin/
  // Create global constants which are configured at compile time.
  new webpack.DefinePlugin({
    'process.env': {
      BASE_PATH: JSON.stringify(BASE_PATH),
      GAMES_HOST: JSON.stringify(GAMES_HOST),
      NODE_ENV: JSON.stringify(NODE_ENV),
      HOST: JSON.stringify(HOST),
    }
  }),

  new HtmlWebpackPlugin({
    filename: 'index.html', // output template
    hash: !isDev, // automagically hashes bundles
    template, // original template
    templateParameters: {
      base: BASE_PATH,
      gamesHost: GAMES_HOST,
      host: HOST
    }
  }),
  /*
  isDev ? () => ({})
    : new HtmlWebpackPlugin({
      template: path.join(sourcePath, 'templates', 'layout.pug'),
      filename: 'layout.pug',
      hash: true,
      templateParameters: {
        base: BASE_PATH,
        gamesHost: GAMES_HOST,
        host: HOST
      }
      // minify (true if mode production and false if mode development)
    }),
*/
  // https://www.npmjs.com/package/html-webpack-pug-plugin
  new HtmlWebpackPugPlugin(),

  // https://webpack.js.org/plugins/copy-webpack-plugin/
  // Copy files and dirs from one location to another.
  new CopyWebpackPlugin([
    {
      from: assets,
      to: buildPath
    },
    {
      from: path.join(__dirname, 'node_modules', 'auth0-js', 'build', 'auth0.js'),
      to: path.join(buildPath, 'js', 'auth0.js')
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
