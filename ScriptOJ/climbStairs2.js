/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if(n <= 2) return n;

  let result = 0;
  let current = 1;
  let next = 2;
  for (let i = 2; i < n; i++) {
    result = current + next;
    current = i;
    next = result;
  }
  return result;
};
console.log(climbStairs(5));

