/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  if(n === 0) return 0;
  let queue = [];
  queue.push(n);

  let cur,queueSize
  let count = 0;
  let visitedMap = {};

  while (queue.length !== 0) {
    count += 1;
    queueSize = queue.length;
    for (let i = 0; i < queueSize; i++) {
      cur = queue.shift();
      for (let j = 1; j < Math.floor(Math.sqrt(cur)) + 1; j++) {
        let rest = (cur - j * j);
        if(rest === 0) {
          return count;
        }
        if(!visitedMap[`${rest}`]) {
          queue.push(rest);
          visitedMap[`${rest}`] = rest;
        }
      }
    }
  }
  return count;
};

console.log(numSquares(12));