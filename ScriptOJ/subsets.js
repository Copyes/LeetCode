/**
 * 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * 说明：解集不能包含重复的子集。
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let len = nums.length;
  let res = [[]];
  for (let i = 0; i < len; i++) {
    let resLen = res.length;
    for (let j = 0; j < resLen; j++) {
      let temp = res[j].slice();
      temp.push(nums[i]);
      res.push(temp);
    }
  }
  return res;
};
console.log(subsets([1,2,3]));