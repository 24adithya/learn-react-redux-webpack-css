module.exports = {
  entry: {
    main: "./src/index.js"
  },
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/,         // Match both .js and .jsx files
        exclude: /node_modules/, 
        use: ['babel-loader']
      },
      {
        //### whenever we use a html file. in our case, we are using template.html `html-loader` will be called.
        //### we can minify the html if needed but as of now it's only a starting point for other loaders i.e.
        //### if it has any images then this loader will be called first and later the `file-loader` for images and
        //### other loaders if needed 
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        //### whenever webpack encounters any of these image files, it will use the `file-loader` and rename it according to
        //### the name format specified 
        test: /\.(svg|png|jpg|gif)$/, 
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'images'
          }
        }
      }
    ]
  }
};