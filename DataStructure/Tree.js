// 节点类
class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
  show() {
    return this.data;
  }
}
this.result = '';
// 二叉树
class BST {

  constructor() {
    this.root = null;
  }
  // 插入节点
  insert(data) {
    let node = new Node(data, null, null);
    if(this.root === null) {
      this.root = node;
    } else {
      let current = this.root;
      let parent = null;
      while (true) {
        parent = current;
        if(current.data > data) {
          current = current.left;
          if(current === null) {
            parent.left = node;
            break;
          }
        } else {
          current = current.right;
          if(current === null) {
            parent.right = node;
            break;
          }
        }
      }
    }
  }
  // 查找某个数
  find(data) {
    let current = this.root;
    while (current !== null) {
      if(current.data === data) {
        return current;
      } else if(data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return null;
  }

  remove(data) {
    this.removeNode(this.root, data)
  }

  getSmall(node) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }

  removeNode(node, data) {
    if(node === null) {
      return null;
    }
    if(node.data === data) {
      if(node.left === null && node.right === null) {
        return null
      }

      if(node.left === null) {
       return node.right;
      }
      if(node.right === null) {
        return node.left;
      }

      let tempNode = this.getSmall(node.right);
      node.data = tempNode.data;
      node.right = this.removeNode(node.right, tempNode.data);
      return node;

    } else if(data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else {
      node.right = this.removeNode(node.right, node);
      return node;
    }
  }

  getMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  getMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
}

function inOrder(node) {
  if(node !== null) {
    inOrder(node.left);
    console.log(node.show());
    inOrder(node.right);
  }
}

function preOrder(node) {
  if(node !== null) {
    console.log(node.show());
    preOrder(node.left);
    preOrder(node.right);
  }
}

function postOrder(node) {
  if(node !== null){ 
    postOrder(node.left);
    postOrder(node.right)
    console.log(node.show());
  }
}


var nums = new BST(); 
nums.insert(23); 
nums.insert(45); 
nums.insert(16); 
nums.insert(37); 
nums.insert(3); 
nums.insert(99); 
nums.insert(22); 

console.log("Inorder traversal: "); 
preOrder(nums.root);
nums.remove(16);
console.log('remove 16');
preOrder(nums.root);
console.log('the max data: ', nums.getMax());
console.log('the min data: ', nums.getMin());
