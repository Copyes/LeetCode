/**
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 输入: nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出: [2]
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let len1 = nums1.length;
  let len2 = nums2.length;

  let outer = null;
  let inner = null;

  if(len1 > len2) {
    outer = nums2;
    inner = nums1;
  } else {
    outer = nums1;
    inner = nums2;
  }
  inner = inner.sort((a, b) => {
    return a - b;
  });
  let mapObj = {};
  for (let i = 0; i < outer.length; i++) {
    if(binarySearch(inner, outer[i])) {
      mapObj[outer[i]] = true;
    }
  }
  return Object.keys(mapObj).map((item) => {
    return item && parseInt(item);
  });
};

function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + (right - left)/2));
    if(nums[mid] === target) {
      return true;
    } else if(nums[mid] > target) {
      right = mid - 1;
    } else if(nums[mid] < target) {
      left = mid + 1;
    }
  } 
  return false;
}

console.log(intersection([1,2], [1,2]));