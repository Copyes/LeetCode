class FileListPlugin {

  constructor(options) {
    this.filename = options && options.filename || 'FileList.md';
  }


  apply(compiler) {
    compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, callback) => {

      let len = Object.keys(compilation.assets).length;

      let content = `# ${len} file${len > 1 ? 's': ''} emitted by webpack\n\n`;

      for(let file in compilation.assets) {
        content += `* ${file}\n`;
      }

      compilation.assets[this.filename] = {
        source() {
          return content;
        },
        size() {
          return content.length;
        }
      }

      callback();
    })
  }
}

module.exports = FileListPlugin;