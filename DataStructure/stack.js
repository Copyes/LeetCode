class Stack {
  constructor() {
    this.pos = 0;
    this.data = [];
  }

  push(element) {
    this.data[this.pos++] = element;
  }
  peek() {
    return this.data[this.pos-1];
  }
  pop() {
    return  this.data[--this.pos];
  }
  clear() {
    this.pos = 0;
  }
  length() {
    return this.pos;
  }
}

// var s = new Stack(); 
// s.push("David"); 
// s.push("Raymond"); 
// s.push("Bryan"); 
// console.log("length: " + s.length()); 
// console.log(s.peek());
// var popped = s.pop();
// console.log("The popped element is: " + popped); 
// console.log(s.peek());
// s.push("Cynthia");
// console.log(s.peek());
// s.clear();
// console.log("length: " + s.length()); 
// console.log(s.peek());
// s.push("Clayton");
// console.log(s.peek());

function mulBase(num, base) {
  let s = new Stack();
  do {
    s.push(num % base)
    num = Math.floor(num /= base);
  } while (num > 0)
  console.log(s.length());
  let convert = ''
  while (s.length() > 0) {
    convert += s.pop();
  }
  return convert;
}


function checkKuohao(str) {
  let s = new Stack();
  const strMap = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  const strArr = ['(',')','{','}','[',']'];

  for(let i = 0; i < str.length; i++) {
    if(strArr.indexOf(str[i]) > -1) {
      let popValue = s.peek();
      if(popValue && strMap[popValue] === str[i]) {
        s.pop()
      } else {
        s.push(str[i]);
      }
    }
  }
  if(s.length() === 0) {
    return true;
  }
  return false;
}

console.log(checkKuohao('[2.3 + 23 / 12] + ([3.14159×0.24)'));