/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let result = [1];
    for (let i = 1; i < rowIndex; i++) {
      for (let j = result.length - 1; j > 0; j--) {
        result[j] = result[i-1][j-1] + result[i-1][j];
      }
      result = result.concat(1);
    }
    return result;
};