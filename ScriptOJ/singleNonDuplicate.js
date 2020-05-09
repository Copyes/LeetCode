/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  let l = 0;
  let h = nums.length - 1;
  while (l < h) {
    let mid = Math.floor(l +(h-l)/2);
    if(mid % 2 === 1) {
      mid--;
    }
    if(nums[mid] === nums[mid+1]) {
      l = mid + 2;
    } else {
      h = mid;
    }
  }
  return nums[l];
};

