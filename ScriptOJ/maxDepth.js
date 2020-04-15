/**
 * 给定一个二叉树，找出其最大深度。
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 说明: 叶子节点是指没有子节点的节点。
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
var maxDepth = function(root) {
  if(root === null) {
    return 0;
  } else {
    let leftHeight = maxDepth(root.left);
    let rightHeight = maxDepth(root.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }
};

var maxDepth = function(root) {
  if(!root) {
    return 0;
  }
  if(root.left === null && root.right === null) {
    return 1;
  }

  let cur = root;
  let queue = [root, null]; // 第一层级
  let depth = 1;

  while ((cur = queue.shift()) !== undefined) {
    if(cur === null) {
      if(queue.length === 0) {
        return depth;
      }
      depth++;
      queue.push(null);
      continue;
    }

    let l = cur.left;
    let r = cur.right;

    l && queue.push(l);
    r && queue.push(r);
  }
}