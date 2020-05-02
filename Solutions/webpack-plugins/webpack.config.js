const path = require('path');

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
  plugins: [
    new TestPlugin(),
    new FileListPlugin({
      filename: 'FileList.md'
    })
  ]
}