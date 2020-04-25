/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex1 = function(nums) {
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < nums.length; i++) {
    leftSum = getSum(nums.slice(0, i));
    rightSum = getSum(nums.slice(i+1));

    if(leftSum === rightSum) {
      return i;
    }
  }
  return -1;
};

var pivotIndex2 = function(nums) {
  let sum = getSum(nums);
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if(leftSum === sum - leftSum - nums[i]) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
}

const getSum = function(nums) {
  if(nums.length) {
    return nums.reduce((prev, next) => prev + next);
  }
  return 0;
}

console.log(pivotIndex2([1,7,3,6,5,6]));