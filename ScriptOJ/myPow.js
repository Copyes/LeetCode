/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if(n === 0) return 1;
  x = parseFloat(x);
  if(n < 0) {
    x = parseFloat(1/x);
    n = -n;
  }

  let result = 1;
  let temp = x;
  for (let i = n; i > 0; i=parseInt(i/2)) {
    if(i&1 === 1) {
      // 奇数
      result = result * temp;
    }
      // 偶数
    temp = temp * temp;
  }
  return result;
};

console.log(myPow(2,7));
