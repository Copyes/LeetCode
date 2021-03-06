/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 107. 二叉树的层次遍历 II
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if(!root) return [];
  let res = [];
  let queue = [root];
  while(queue.length > 0) {
      let length = queue.length;
      let temp = [];
      while(length--) {
          let cur = queue.shift();
          if(cur.left) {
              queue.push(cur.left);
          }
          if(cur.right) {
              queue.push(cur.right)
          }
          temp.push(cur.val)
      }
      res.unshift(temp);
  }
  return res;
};