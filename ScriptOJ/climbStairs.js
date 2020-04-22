/**
 * @param {number} n
 * @return {number}
 */
var valMap = {};
var climbStairs = function(n) {
  if(n <= 2) return n;

  if(valMap[`${n}`]) return valMap[`${n}`];
  let result = climbStairs(n-1) + climbStairs(n-2);
  valMap[`${n}`] = result;
  return result;
};

