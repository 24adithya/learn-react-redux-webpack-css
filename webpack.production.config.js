const path = require('path');

const commonConfig = require('./webpack.common.config');

//### this is a must to have your bundles copied to your output HTML file
const HtmlWebpackPlugin = require('html-webpack-plugin');

//### this plugin is used to perform minification on JS/CSS or any other specified files
const TerserWebpackPlugin = require('terser-webpack-plugin'); 

//### this plugin is used to compress the resultant output bundles
// const CompressionWebpackPlugin = require('compression-webpack-plugin');

//### this plugin is useful to append certain appended files to index.html
//### for example, after using compression, this plugin will append .gz or .br bundled files into index.html
// const HtmlAssetsWebpackPlugin = require('html-webpack-change-assets-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

//### webpack finds any resource which can be fetched from CDN rather than creating a separate bundle for it during optimization of bundles
const DynamicCDNPlugin = require('dynamic-cdn-webpack-plugin');

//### combine common webpack config with current webpack config
const {merge} = require('webpack-merge');

//### Clean webpack clears old `contentHash` files
const CleanWebpackPlugin = require("clean-webpack-plugin");

//### Extract CSS into files rather than linking dynamically and create a lag in loading
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//### Optimize CSS files before bundling
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const pluginList = [
    // new HtmlWebpackPlugin(
    //     {
    //         filename:'./index.html',
    //         template:'./src/index.html'
    //         //jsExtension:['gz'] - we will add this post compression
    //     }
    // ),
    // new CompressionWebpackPlugin({
    //     test: /\.(js|css)?$/i,
    //     algorithm: 'gzip',
    //     deleteOriginalAssets: true,
    //     minRatio: 0.8
    // }),
    // new HtmlAssetsWebpackPlugin(),
    new DynamicCDNPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
    
]

module.exports = merge(commonConfig, {
 mode:'production',
 output: {
    path: path.join(__dirname, '/dist'),
    //### name in square brackets indicates multiple entry points
    //### contentHash indicates a new bundle file being created after build and helps in caching in case file didn't change
    filename: '[name].[contentHash].bundle.js'
 },
 optimization: {
    minimize: true,
    minimizer: [
        new OptimizeCssAssetsPlugin(),
        new TerserWebpackPlugin({
            parallel: true,
            minify: TerserWebpackPlugin.uglifyJsMinify,
            terserOptions: {}
        }),
        new HtmlWebpackPlugin({
        template: "./src/template.html",
        //jsExtension:['gz'] - we will add this post compression
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      })
    ],
    // runtime: 'single',
    // splitChunks: {
    //     chunks: 'all',
    //     maxInitialRequest: Infinity,
    //     minSize: 20000,
    //     maxSize: 200000,
    //     cacheGroups: {
    //         vendor: {
    //             test: /[\\/]node_modules[\\/]/,
    //             name(module) {

    //             }
    //         },
    //         reuseExistingChunk: true
    //     }
    // }
 },
 module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, //3. Extract css into files
          "css-loader", //1. Turns css into commonjs
          //"sass-loader" //1. Turns sass into css
        ]
      }
    ]
  },

 plugins: pluginList
});