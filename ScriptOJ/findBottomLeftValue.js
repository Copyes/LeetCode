/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 给定一个二叉树，在树的最后一行找到最左边的值。
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
  if(!root) return ;
  let res = null;
  let queue = [root];
  while(queue.length > 0) {
      let length = queue.length;
      for(let i = 0; i < length; i++) {
          let cur = queue.shift();
          if(cur.left) {
              queue.push(cur.left);
          }
          if(cur.right) {
              queue.push(cur.right);
          }
          if(i === 0) {
              res = cur.val;
          }
      }
  }
  return res;
};