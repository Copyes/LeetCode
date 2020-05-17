/**
 * 我们把符合下列属性的数组 A 称作山脉：

A.length >= 3
存在 0 < i < A.length - 1 使得A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
给定一个确定为山脉的数组，返回任何满足 A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1] 的 i 的值。
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
  if(A.length < 3) return 0;
  let left = 0;
  let right = A.length-1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2); 
    if(A[mid] > A[mid-1] && A[mid] > A[mid+1]) {
      return mid;
    } else if(A[mid] > A[mid-1] && A[mid] < A[mid+1]){
      left = mid+1;
    } else if(A[mid] > A[mid+1] && A[mid] < A[mid-1]) {
      right = mid-1;
    }
  }
  return 0;
};

console.log(peakIndexInMountainArray([18,29,38,59,98,100,99,98,90]));