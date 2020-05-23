/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {TreeNode} tree
 * @return {ListNode[]}
 */
var listOfDepth = function(tree) {
  let res = [];
  let temp = [tree];
  while (temp.length !== 0) {
    let lens = temp.length;
    let head = null;
    let cur = null;
    let prev = null;
    while (lens--) {
      let {val, left, right} = temp.shift();
      cur = new ListNode(val);
      if(prev) {
        prev.next = cur;
      } else {
        head = cur;
      }
      prev = cur;

      if(left) {
        temp.push(left);
      }
      if(right) {
        temp.push(right);
      }
    }
    res.push(head)
  }
  return res;
};