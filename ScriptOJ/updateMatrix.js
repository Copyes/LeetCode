/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if(matrix[r][c] === 1) {
        dfs(matrix, r, c);
      }
    }
  }
  return matrix;
};
function dfs(matrix, r, c) {
  if(matrix[r][c] === 1) {
    matrix[r][c]++;
  }
  if(r >= 1) dfs(matrix, r-1, c);
  if(c >= 1) dfs(matrix, r, c-1);
  if(r+1 < matrix.length) dfs(matrix, r+1, c);
  if(c+1 < matrix[0].length) dfs(matrix, r, c+1)
}

console.log(updateMatrix([[0,0,0],[0,1,0],[1,1,1]]));