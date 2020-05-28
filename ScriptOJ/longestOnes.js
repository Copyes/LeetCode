/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
  let left = right = 0;
  let res = 0;
  while (right < A.length) {
    let a = A[right];
    if(a === 0) {
      if(K > 0) {
        K--;
      } else {
        // console.log(right, left);
        res = Math.max(res, right - left);
        while (A[left++] === 1);
        // console.log(left);
      }
    }
    // console.log(left, 'sss',right);
    right++;
  }
  return Math.max(res, right - left);
};
// console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2));