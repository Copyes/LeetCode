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
var preorderTraversal = function(root) {
  if(root === null) return [];
  let result = [];
  let stack = [root];

  while(stack.length) {
      let cur = stack.pop();
      result.push(cur.val);
      
      cur.right && stack.push(cur.right);
      cur.left && stack.push(cur.left);
  }
  return result;
};