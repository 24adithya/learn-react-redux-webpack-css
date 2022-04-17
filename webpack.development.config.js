const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = require('./webpack.common.config');

//### combine common webpack config with current webpack config
const {merge} = require('webpack-merge');

const pluginList = [
  new HtmlWebpackPlugin(
      {
          filename:'./index.html',
          template:'./src/index.html'
      }
  )
]

module.exports = merge(commonConfig, {
  mode:'development',
  output: {
    path: path.join(__dirname, '/dist'),
    //### name in square brackets indicates multiple entry points
    //### contentHash indicates a new bundle file being created after build and helps in caching in case file didn't change
    filename: '[name].bundle.js'
  },
  plugins: pluginList,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", //2. Inject styles into DOM
          "css-loader", //1. Turns css into commonjs
        ]
      }
    ]
  },
  //...
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 9001,
    historyApiFallback: true
  }
});