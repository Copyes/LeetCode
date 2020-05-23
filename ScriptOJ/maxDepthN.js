/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
  if(!root) return 0;
  let queue = [root];
  let depth = 0;
  
  while (queue.length > 0) {
    let length = queue.length;
    while (length--) {
      let cur = queue.shift();
      for (const item of cur.children) {
        queue.push(item);
      }
    }
    depth++
  }
  return depth;
};