/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if(nums.length === 0 || !nums) return 0;
  let index = rightBound(nums, target);
  if(index === -1) {
      return 0;
  }
  let i = index - 1;
  let count = 1
  while(i >= 0) {
      if(nums[i] === target) {
          count++;
      }
      i--;
  }
  return count;
};

var rightBound = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while(left <= right) {
      let mid = left + Math.floor((right - left)/2);
      if(nums[mid] <= target) {
          left = mid + 1;
      } else if(nums[mid] > target) {
          right = mid - 1;
      }
  }
  if(right < 0 || nums[right] !== target) {
      return -1;
  }
  return right;
}

console.log(search([5,7,7,8,8,10], 8));