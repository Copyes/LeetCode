/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let result = [];
  for (let i = 0; i < numRows; i++) {
    let temp = [];
    for (let j = 0; j <= i ; j++) {
      temp.push(combine(i, j));
    }
    result.push(temp);
  }
  return result
};

var combine = function(m , n) {
  if(n === 0) {
    return 1;
  } else if(m === n) {
    return 1;
  } else {
    return combine(m - 1, n) + combine(m - 1, n - 1);
  }
}

console.log(generate(5));