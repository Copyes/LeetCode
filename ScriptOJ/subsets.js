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

var subsets = function(nums) {
  let res = [];
  let track = [];
  let start = 0;
  backtrack(nums, start, track, res);
  function backtrack(nums, start, track, res) {
    res.push(track.slice());
    for (let i = start; i < nums.length; i++) {
      track.push(nums[i]);
      backtrack(nums, i + 1, track, res);
      track.pop();
    }
  }
  return res;
};

console.log(subsets([1,2,3]));