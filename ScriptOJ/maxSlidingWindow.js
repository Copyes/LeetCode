/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if(k === 1) return nums;
  if(k === nums.length) return nums;
  let length = nums.length - k;
  let result = [];
  for (let i = 0; i <= length; i++) {
    let arrSlice = nums.slice(i, i+k);
    arrSlice.sort((a,b)=> a-b);
    result.push(arrSlice[k-1]);
  }
  return result;
};