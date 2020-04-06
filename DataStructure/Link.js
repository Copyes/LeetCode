function Node(element) {
  this.node = element;
  this.next = null;
}

class LinkList {
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

  findPrev(item) {
    let curNode = this.head;
    while (curNode.next !== null && curNode.next.node !== item) {
      curNode = curNode.next;
    }
    return curNode;
  }

  insert(newItem, item) {
    let curNode = this.find(item);
    let newNode = new Node(newItem);
    newNode.next = curNode.next;
    curNode.next = newNode;
  }
  remove(item) {
    let prevNode = this.findPrev(item);
    if(prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
    }
  }
  display() {
    let curNode = this.head;
    while (curNode.next !== null) {
      console.log(curNode.next.node);
      curNode = curNode.next;
    }
  }
}

var cities = new LinkList(); 
cities.insert("Conway", "head"); 
cities.insert("Russellville", "Conway"); 
cities.insert("Carlisle", "Russellville"); 
cities.insert("Alma", "Carlisle"); 
cities.display(); 
cities.remove("Carlisle"); 
cities.display();
