const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: ['./index.js'],
  output: {
    path: path.resolve(__dirname, './'),
    filename: "[name].js",
    publicPath: "./assets/",
  },
  devServer: {
    contentBase: path.join(__dirname, './'),
    compress: true,
    port: 9000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  devtool: isProduction ? false : 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin()
  ]
};
