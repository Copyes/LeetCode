const loaderUtils = require('loader-utils');

module.exports = function(sources) {
  console.log('simple-loader test!');
  return sources;
} 
module.exports.pitch =  function(remainingRequest) { 
  console.log('pitching graph');
  console.log(remainingRequest);
  // todo
  return `
    let style = document.createElement('style');

    /**
      * 利用 remainingRequest 参数获取 loader 链的剩余部分
      * 利用 ‘!!’ 前缀跳过其他 loader 
      * 利用 loaderUtils 的 stringifyRequest 方法将模块的绝对路径转为相对路径
      * 将获取 css 的 require 表达式赋给 style 标签
      */
     style.innerHTML = require(${loaderUtils.stringifyRequest(this, '!!' + remainingRequest)}) 
     document.head.appendChild(style);
  `;
}