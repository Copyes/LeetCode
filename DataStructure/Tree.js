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
}

function inOrder(node) {
  if(node !== null) {
    inOrder(node.left);
    console.log(node.show());
    inOrder(node.right);
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
inOrder(nums.root);
