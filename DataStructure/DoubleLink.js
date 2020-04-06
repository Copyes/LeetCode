function Node(element) {
  this.node = element;
  this.next = null;
  this.previous = null;
}

class DoubleLink {
  constructor() {
    this.head = new Node('head');
  }

  find(item) {
    let curNode = this.head;
    while (curNode.node !== item) {
      curNode = curNode.next;
    }
    return curNode;
  }

  findLast() {
    let curNode = this.head;
    while (curNode.next !== null) {
      curNode = curNode.next;
    }
    return curNode;
  }

  insert(newItem, item) {
    let curNode = this.find(item);
    let newNode = new Node(newItem);

    newNode.next = curNode.next;
    newNode.previous = curNode;
    curNode.next = newNode
  }

  remove(item) {
    let curNode = this.find(item);
    while (curNode.next !== null) {
      curNode.previous.next = curNode.next;
      curNode.next.previous = curNode.previous;
      curNode.next = null;
      curNode.previous = null;
    }
  }

  dispReverse() {
    let curNode = this.findLast();
    while (curNode.previous !== null) {
      console.log(curNode.node);
      curNode = curNode.previous;
    }
  }

  display() {
    var curNode = this.head;
    while (!(curNode.next == null)) {
    console.log(curNode.next.node);
    curNode = curNode.next; }
  }
}


var cities = new DoubleLink(); 
cities.insert("Conway", "head"); 
cities.insert("Russellville", "Conway"); 
cities.insert("Carlisle", "Russellville"); 
cities.insert("Alma", "Carlisle"); 
cities.display();
console.log('-------')
cities.remove("Carlisle"); 
cities.display(); 
console.log('-------')
cities.dispReverse();