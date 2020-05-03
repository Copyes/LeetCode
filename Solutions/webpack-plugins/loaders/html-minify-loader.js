const Minimize = require('minimize');
const loaderUtils = require('loader-utils');

module.exports = function (source) {
  const callback = this.async();
  if(this.cacheable) {
    this.cacheable();
  }
  // 获取传进来的参数
  const options = loaderUtils.getOptions(this) || {};
  console.log(options);
  const minimize = new Minimize(options);
  return minimize.parse(source, callback);
}