// webpack.config.js
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: ['./front/src/index'], // file extension after index is optional for .js files
  output: {
    path: path.join(__dirname, 'front/dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: './front/src/index.html'
    })
  ],
  module: {
    loaders: [
      {
      test: /\.sass$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader'
            // options: {
            //   presets: ['env']
            // }
          }
      }
    ]
  }
}
