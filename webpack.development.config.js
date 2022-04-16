const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pluginList = [
  new HtmlWebpackPlugin(
      {
          filename:'./index.html',
          template:'./src/index.html'
      }
  )
]

module.exports = {
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
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    historyApiFallback: true
  }
};