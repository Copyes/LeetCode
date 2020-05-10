Function.prototype.myApply = function(thisArg, params = []) {
  let fn = Symbol('fn');
  thisArg = thisArg || window;
  thisArg[fn] = this;
  const result = thisArg[fn](...params);
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
foo.myApply(Obj, ['技术部', '男']);
