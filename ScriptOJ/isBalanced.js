/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
let ans = null;
var isBalanced = function(root) {
  ans = true;
  dfs(root);
  function dfs(node) {
    if(node === null) return 0;
    let left = dfs(node.left);
    let right = dfs(node.right);
    if(Math.abs(left-right) > 1) {
      ans = false;
    }
    return Math.max(left, right) + 1;
  }

  return ans;
};