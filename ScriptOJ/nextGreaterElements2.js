/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  // 循环数组，用两次数据来代替
  let doubleNums = [...nums, ...nums];
  let length = doubleNums.length;
  let stack = [];
  let ans = new Array(length).fill(-1);
  for (let i = length - 1; i >= 0; i--) {
    while (stack.length !== 0 && stack[stack.length-1] <= doubleNums[i]) {
      stack.pop();
    }
    ans[i] = stack.length > 0 ? stack[stack.length - 1] : -1;
    stack.push(doubleNums[i]);
  }
  return ans.slice(0, (ans.length/2));
};