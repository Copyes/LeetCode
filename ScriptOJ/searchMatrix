/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const rows = matrix.length;
  if(rows.length === 0) {
    return false;
  }
  if(!matrix[0]) {
    return false;
  }
  const cols = matrix[0] && matrix[0].length;

  let i = rows - 1;
  let j = 0
  while (i >= 0 && j < cols) {
    if(matrix[i][j] === target) {
      return true;
    } else if(matrix[i][j] > target) {
      i--;
    } else {
      j++
    }
  }
  return false;
};

console.log(searchMatrix([
  null, null
], 20));