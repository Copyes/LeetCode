/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if(nums.length <= 1) return nums[0];
    let map = {}
    let result = null;
    for(let i = 0; i < nums.length; i++) {
      if(map[nums[i]] === undefined) {
        map[nums[i]] = 0;
      } else {
        map[nums[i]] = 1;
      }
    }
    for(let i = 0; i < nums.length; i++) {
      if(map[nums[i]] === 0) {
        result = nums[i];
      }
    }
    return result;
};

var singleNumber = function(nums) {
  return nums.reduce((x, y) => x^y);
}
