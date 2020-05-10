function Parent(name) {
  this.name = name;
}
Parent.prototype.getName = function() {
  return this.name;
}

function Child() {
  Parent.call(this, 'aaaa')
  this.num = '1';
}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

Child.prototype.getNum = function() {
  return this.num;
}

let a = new Child();
let b = new Child();
let p = new Parent();
a.name = 'xxxx';
console.log(b.name);
console.log(a);
console.log(p.getName());
console.log(a.getNum());


