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
var inorderTraversal = function(root) {
  if(root === null) return [];
  let result = [];
  let stack = [];
  let cur = root;
  while (cur && stack.length) {
    while (cur !== null) {
      stack.push(cur.left);
      cur = cur.left;
    }
    let top = stack.pop;
    result.push(top.val);
    // 右子树；
    cur = top.right;
  }
  return result;
};