/**
 * @param {number} n
 * @return {number}
 */
const map = {}
// var numWays = function(n) {
//     if(n === 1) return 1;
//     if(n === 2) return 2;
//     if(map[n]) {
//       return map[n];
//     }
//     return numWays(n - 1) + numWays(n - 2);
// };

var numWays = function(n) {
  if(n <= 1) return 1;
  if(n === 2) return 2;
  
  let arr = new Array(n+1);

  arr[0] = 1;
  arr[1] = 1;

  for (let i = 2; i < n+1; i++) {
    arr[i] = (arr[i-1] + arr[i-2])%1000000007
    
  }
  return arr[n];
}


console.log(numWays(44));