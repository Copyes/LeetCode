// 队列数据结构
class Queue {
  constructor() {
    this.data = [];
  }
  // 入队
  enqueue(element) {
    this.data.push(element);
  }
  // 出队
  dequeue() {
    return this.data.shift();
  }
  // 队首
  front() {
    return this.data[0];
  }
  // 队尾
  back() {
    return this.data[this.data.length-1];
  }
  empty() {
    if(this.data.length > 0) {
      return false
    }
    return true;
  }
  toString() {
    var retStr = "";
    for (var i = 0; i < this.data.length; ++i) {
      retStr += this.data[i] + "\n"; 
    }
    return retStr;
  }
}

var q = new Queue(); 
q.enqueue("Meredith"); 
q.enqueue("Cynthia"); 
q.enqueue("Jennifer"); 
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log("Front of queue: " + q.front()); 
console.log("Back of queue: " + q.back());


