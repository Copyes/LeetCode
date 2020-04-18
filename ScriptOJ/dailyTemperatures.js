/**
 * @param {number[]} T
 * @return {number[]}
 */

Array.prototype.peek = function() {
  return this[this.length - 1];
}
var dailyTemperatures = function(T) {
  let result = [];
  let stack = [];
  for (let i = 0; i < T.length; i++) {
    while (stack.length !== 0 && T[i] > T[stack.peek()]) {
      let index = stack.pop();
      result[index] = i - index;
    }
    stack.push(i);
  }
  return result;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));