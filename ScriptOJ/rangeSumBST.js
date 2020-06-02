/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 递归做回超时
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST2 = function(root, L, R) {
  if(root === null) return 0;
  let ans = 0;
  helper(root);
  function helper(node) {
      if(node !== null) {
          helper(node.left)
          if(node.val >= L && node.val <= R) {
              ans += node.val;
          }
          helper(node.right);
      }
  }
  return ans;
};

var rangeSumBST = function(root, L, R) {
  let stack = []  //  迭代算法用的栈
  let sum = 0   //  结果
  stack.push(root)
  while(stack.length > 0){
    let cur = stack.pop()
    if(!cur){
      continue;
    }
    if(cur.val >= L && cur.val <=R){
      stack.push(cur.left)
      stack.push(cur.right)
      sum += cur.val
    }else if(cur.val < L){
      stack.push(cur.right)
    }else{
      stack.push(cur.left)
    }
  }
  return sum
};
