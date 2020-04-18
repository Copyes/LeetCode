/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if(grid[i][j] === '1') {
        count++;
        dfs(grid, i, j);
      }
    }
  }
  return count;
};

var dfs = function(grid, y, x) {
  if(x < 0 || y < 0 || y > grid.length - 1 || x > grid[0].length - 1 || grid[y][x] === '0') return;
  grid[y][x] = '0';
  dfs(grid, y, x + 1);
  dfs(grid, y + 1, x);
  dfs(grid, y, x - 1);
  dfs(grid, y - 1, x);
}