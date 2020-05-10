Function.prototype.myCall = function(thisArg, ...args) {
  let fn = Symbol('fn');
  thisArg = thisArg || window;
  thisArg[fn] = this;
  const result = thisArg[fn](...args);
  delete thisArg[fn];
  return result;
}
function foo(...args) {
  console.log(this.name);
  console.log(...args);
}
let Obj = {
  name: 'xxxx'
}
foo.myCall(Obj, '技术部', '男');