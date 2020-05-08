// 二分查找
function binarySearch(nums, target) {
  let l = 0;
  let h = nums.length - 1;

  while (l <= h) {
    let mid = Math.floor((l + h) / 2);
    if(nums[mid] < target) {
      h = mid - 1;
    } else if(nums[mid] > target) {
      l = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

console.log(binarySearch([1,2,3,4,5], 3));