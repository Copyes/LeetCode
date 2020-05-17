/**
 * 给你一个 m * n 的矩阵 grid，矩阵中的元素无论是按行还是按列，都以非递增顺序排列。 
 * 请你统计并返回 grid 中 负数 的数目。
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
  let len = grid.length;
  let res = 0
  for (let i = 0; i < len; i++) {
    let row = grid[i];
    let left = 0;
    let right = row.length;
    while (left < right) {
      let mid = Math.floor(left + (right - left) / 2);
      if(row[mid] >= 0) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    if(row[left] < 0) {
      res += (row.length - left);
    }
  }
  return res;
};

console.log(countNegatives([[3,2],[1,0]]));