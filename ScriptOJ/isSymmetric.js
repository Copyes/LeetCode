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
var isSymmetric = function(root) {
  if(root == null) return true;
  
  function recur(L, R) {
    if(L === null && R === null) return true;
    if(L === null || R === null || L.val !== R.val) return false;
    
    return recur(L.left, R.right) && recur(L.right, R.left);
  }

  return recur(root.left, root.right);
};