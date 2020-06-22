/**
 * 一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  while(left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      if(nums[mid] === mid) {
          left = mid + 1;
      } else if(mid < nums[mid]){
          right = mid -1;
      }
  }
  return left;
};