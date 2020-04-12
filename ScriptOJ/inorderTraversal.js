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
  let current = root;
  let stack = [];
  let result = [];
  while (current !== null || stack.length !== 0) {
    while (current !== null) {
        stack.push(current);
        current = current.left;
    }
    let top = stack.pop();
    result.push(top.val);
    current = top.right;
  }
  return result;
};