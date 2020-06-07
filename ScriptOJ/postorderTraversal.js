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
var postorderTraversal = function(root) {
  if(root === null) return null;
  let result = [];
  let stack = [root];

  while (stack.length) {
    let cur = stack.pop();
    if(cur !== null) {
      result.unshift(cur.val);
    }

    cur.left && stack.push(cur.left);
    cur.right && stack.push(cur.right);
  }
  return result;
};