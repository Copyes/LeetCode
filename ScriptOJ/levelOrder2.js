/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
  if(!root) return [];
  let res = [];
  let queue = [root];
  while(queue.length > 0) {
      let length = queue.length;
      while(length--) {
          let cur = queue.shift();
          if(cur.left) {
              queue.push(cur.left)
          }
          if(cur.right) {
              queue.push(cur.right);
          }
          res.push(cur.val)
      }
  }
  return res;
};