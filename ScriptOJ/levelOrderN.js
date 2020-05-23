/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * 给定一个 N 叉树，返回其节点值的层序遍历。 (即从左到右，逐层遍历)。
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(!root) return [];
  let res = [];
  let queue = [root];
  while (queue.length > 0) {
    let length = queue.length;
    let temp = [];
    while (length--) {
      let cur = queue.shift();
      for (const item of cur.children) {
        queue.push(item);
      }
      temp.push(cur.val)
    }
    res.push(temp);
  }
  return res;
};