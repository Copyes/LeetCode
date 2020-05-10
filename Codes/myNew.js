function myNew(Fn, params) {
  let obj = Object.create(Fn.prototype);
  let result = Fn.call(obj, ...params);
  return Object.prototype.toString.call(result) === '[Object object]' ? result : obj;
}

function Func(name) {
  this.name = name;
}

const a = myNew(Func, 'aaaa');
console.log(a);
console.log(a.__proto__ === Func.prototype);