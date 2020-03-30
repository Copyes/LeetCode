/**
 * 给定一个整数数组，判断是否存在重复元素。如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。
 * 输入: [1,2,3,1]
输出: true
输入: [1,2,3,4]
输出: false
输入: [1,1,1,3,3,4,3,2,4,2]
输出: true
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let numMap = {};
  for(let i = 0; i < nums.length; i++) {
    if(numMap[`${nums[i]}`] > 0) {
      return true
    } else {
      numMap[`${nums[i]}`] = 1;
    }
  }
  console.log(numMap);
  return false;
};

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));