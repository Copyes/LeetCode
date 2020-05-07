/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  if(c < 0) return 0;
  let left = 0;
  let right = Math.floor(Math.sqrt(c));

  while (left <= right) {
    let val = left * left + right * right;
    if(val === c) {
      return true;
    } else if(val > c) {
      right--;
    } else {
      left++;
    }
  }
  return false;
};

console.log(judgeSquareSum(5));