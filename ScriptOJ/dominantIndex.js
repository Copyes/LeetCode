/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  let maxOne = 0;
  let maxTwo = 0;
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if(maxOne < nums[i]) {
      maxTwo = maxOne;
      maxOne = nums[i];
      index = i;
    } else if(maxTwo < nums[i]) {
      maxTwo = nums[i];
    }
  }

  return maxOne >= maxTwo * 2 ? index : -1;
};

console.log(dominantIndex([1, 2, 3, 4]));