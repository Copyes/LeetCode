
class TestPlugin {
  apply(compiler) {
    compiler.hooks.done.tap('Test Plugin', (stats) => {
      console.log('succeed!!');
    });
  }
}

module.exports = TestPlugin;