/**
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
 * 输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let res = [];
  let track = [];
  backtrack(nums, track);
  function backtrack(nums, track) {
    if(nums.length === track.length) {
      res.push(track.slice());
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if(track.includes(nums[i])) {
        continue;
      }
      track.push(nums[i]);
      backtrack(nums, track);
      track.pop();
    }
  }
  return res;
};

console.log(permute([1,2,3]));