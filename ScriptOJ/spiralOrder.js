/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if(!matrix || matrix.length < 1) return [];

  let m = matrix.length;
  let n = matrix[0].length;
  if(n === 1) return [...matrix];
  let maxCount = m * n;
  let tempArr = new Array(maxCount);

  let T = 0; // 上边界
  let D = m; // 下边界
  let L = 0; // 左边界
  let R = n; // 右边界

  let x = 0; // 列坐标
  let y = 0; // 行坐标

  let state = 'Right'; // 定义四个方向，根据不同状态切换方向
  T = 1;
  for (let i = 0; i < maxCount; i++) {
    tempArr[i] = matrix[y][x];
    switch (state) {
      case 'Right':
        x++;
        if(x === R - 1) {
          state = 'Down';
          R--;
        }
        break;
      case 'Down':
        y++;
        if(y === D - 1) {
          state = 'Left';
          D--;
        }
        break;
      case 'Up':
        y--;
        if(y === T) {
          state = 'Right';
          T++;
        }
        break;
      case 'Left':
        x--;
        if(x === L) {
          state = 'Up';
          L++;
        }
        break;
    }
  }
  return tempArr;
};

console.log(spiralOrder([
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
 ]));