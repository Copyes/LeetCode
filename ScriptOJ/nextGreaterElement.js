/**
 * nums1 = [4,1,2], nums2 = [1,3,4,2].
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  let length = nums2.length;
  let ans = [];
  let stack = [];
  let map = new Map();
  for (let i = 0; i < length; i++) {
    while (stack.length && stack[stack.length -1] < nums2[i]) {
      map.set(stack.pop(), nums2[i])
    }
    stack.push(nums2[i]);
  }

  //栈内还有元素，说明后面没有比自己小的了
  while(stack.length){
    map.set(stack.pop(), -1)
  }
  nums1.forEach(item => {
    ans.push(map.get(item))
  })
  return ans;
};