/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
 * 重点是返回每一层最后一个节点就好了
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  if(!root) return [];
  let res = [];
  let queue = [root];

  while(queue.length > 0) {
      let length = queue.length;
      for(let i = 0; i < length; i++) {
          let cur = queue.shift();
          if(cur.left) {
              queue.push(cur.left);
          }
          if(cur.right) {
              queue.push(cur.right);
          }
          if(i === length - 1) { // 每一层最后一个节点的值
              res.push(cur.val);
          }
      }
  }
  return res;
};