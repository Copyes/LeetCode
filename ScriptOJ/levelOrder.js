/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(!root) return [];
  let queue = [root];
  let res = [];
  while (queue.length > 0) {
    let length = queue.length;
    let temp = [];
    while (length--) {
      let cur = queue.shift();
      if(cur.left) {
        queue.push(cur.left)
      }
      if(cur.right) {
        queue.push(cur.right);
      }
      temp.push(cur.val);
    }
    res.push(temp);
  }
  return res;
};