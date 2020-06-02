/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if(preorder.length === 0 || inorder.length === 0) return null;
  let node = new TreeNode(preorder[0]);
  let i = inorder.indexOf(preorder[0]);
  node.left = buildTree(preorder.slice(1, i+1), inorder.slice(0, i));
  node.right = buildTree(preorder.slice(i+1), inorder.slice(i+1));
  return node;
};