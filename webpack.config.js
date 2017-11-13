var path = require('path');
var webpack = require('webpack');

var config = {
  context: path.join(__dirname, 'src/client'),
  entry: [
    './index.js'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  devServer: {
    hot: true,
    publicPath: '/public/',
    historyApiFallback: true
  },
  devtool: 'source-map',
  plugins: [
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          { loader: 'react-hot-loader/webpack' },
          { loader: 'babel-loader' }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'src')
    ]
  }
};
module.exports = config;
