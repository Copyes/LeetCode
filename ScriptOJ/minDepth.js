/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if(!root) return 0;
  let queue = [];
  let depth = 1;
  queue.push(root);
  
  while (queue.length !== 0) {
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let cur = queue.shift();
      if(cur.left === null && cur.right === null) {
        return depth;
      }
      if(cur.left !== null) {
        queue.push(cur.left);
      }
      if(cur.right !== null) {
        queue.push(cur.right);
      }
    }
    depth++;
  }
  return depth;
};
