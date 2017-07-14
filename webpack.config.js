'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'source-map',
  bail: true,
  profile: false,
  output: {
    pathinfo: false,
    publicPath: '/',
    path: path.join(__dirname, `dist`),
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  entry: {
    bundle: [
      path.join(__dirname, 'src/index.js')
    ]
  },
  resolve: {
    modules: [
      path.resolve('./src/'),
      'node_modules'
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: []
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      // 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      process: {
        env: {
          NODE_ENV: JSON.stringify('production')
        }
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      sourceMap: true
    })
  ]
}
