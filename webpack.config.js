const path = require("path")
const dotenv = require("dotenv")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

dotenv.config()

const root = path.resolve('./src')

/** @type { WebpackDevServer.Configuration } */
const devServer =  {
  port: 3000,
  publicPath: '/',
  contentBase: './public',
  historyApiFallback: true,
  headers: {
    "Access-Control-Allow-Origin" : "http://localhost:8000",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  },
}

/** @type {HtmlWebpackPlugin.Options} */
const baseHtmlConfig = {
  template: './src/templates/index.ejs',
  inject: 'body',
  cache: false,
}

/** @type {HtmlWebpackPlugin.Options} */
const appHtmlConfig = {
  ...baseHtmlConfig,
  chunks: [ 'app' ],
  filename: 'index.html',
  title: 'Welcome to Casai',
  excludeChunks: [ 'access' ],
}

/** @type {HtmlWebpackPlugin.Options} */
const accessHtmlConfig = {
  ...baseHtmlConfig,
  chunks: [ 'access' ],
  filename: 'login.html',
  excludeChunks: [ 'app' ],
  title: 'Check in to the future',
}

const outputDir = process.env.NODE_ENV === 'production'
  ? path.resolve(__dirname,'..','static') :
  path.resolve(__dirname,'public')


/** @type {webpack.Output} */
const output = {
  path: outputDir,
  chunkFilename: '[name].js',
  publicPath:
    (process.env.NODE_ENV === 'production' && process.env.PUBLIC_PATH) ||
      undefined,
}

const pluginBasedFileConfigs = [
  new HtmlWebpackPlugin(appHtmlConfig),
  new HtmlWebpackPlugin(accessHtmlConfig),
]


const plugins = [
  ...pluginBasedFileConfigs,
  new webpack.ProvidePlugin(
    {
      React: 'react',
      ReactDOM: 'react-dom',
    }
  ),
  new CopyWebpackPlugin([
    {
      from: "public/**/*",
      to: "../",
      transformPath: (target,absolute) => {
        return target.replace("/public", "/static")
      },
    },
  ]),
  new webpack.DefinePlugin({
    API_URL: JSON.stringify(
      process.env.NODE_ENV === 'production' ?
        process.env.PRODUCTION_API_URL : process.env.DEVELOPMENT_API_URL),
  }),
]


/** @type {webpack.Resolve} */
const resolve = {
  extensions: [ '.ts','.tsx', '.js','.jsx' ],
  alias: {
    pages:`${root}/pages`,
    utils: `${root}/utils`,
    store: `${root}/store`,
    i18n: `${root}/i18n`,
    types: `${root}/types`,
    epics: `${root}/epics`,
    hooks: `${root}/hooks`,
    layouts: `${root}/layouts`,
    actions: `${root}/actions`,
    services: `${root}/services`,
    reducers: `${root}/reducers`,
    components: `${root}/components`,
    middlewares: `${root}/middlewares`,
    'action-streams': `${root}/action-streams`,
    'action-creators': `${root}/action-creators`,
  },
}

/** @type {webpack.Entry} */
const entry = {
  app: `${root}/App.tsx`,
  access: `${root}/access.tsx`,
}

/** @type {webpack.Module} */
const moduleConf = {
  rules: [
    {
      test: /\.tsx?$/,
      exclude: /node_modules|cypress/,
      use: {
        loader: 'ts-loader',
      },
    },
  ],
}


/** @type {webpack.Configuration} */
const config = {
  entry,
  resolve,
  plugins,
  output,
  module: moduleConf,
  mode: process.env.NODE_ENV || 'development',
}


if(process.env.NODE_ENV === 'development') {
  config.devServer = devServer
}


module.exports = config