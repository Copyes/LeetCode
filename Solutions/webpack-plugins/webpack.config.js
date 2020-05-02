const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const FileListPlugin = require('./plugins/FileListPlugin.js');
const TestPlugin = require('./plugins/TestPlugin.js');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    test: './src/test.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [path.resolve(__dirname, 'loaders/simple-loader.js'), 'css-loader']
      }
    ]
  },
  plugins: [
    new TestPlugin(),
    new FileListPlugin({
      filename: 'FileList.md'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]

}