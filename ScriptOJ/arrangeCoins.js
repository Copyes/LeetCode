/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    if(n === 0) return 0;
    let left = 0;
    let right = 0;

    while (left <= right) {
      let mid = left + ((right - left) >> 1);
      let count = (mid + 1) * mid / 2;
      if(count === n) {
        return mid;
      } else if(count < n) {
        left = mid + 1;
      } else if(count > n) {
        right = mid - 1;
      }
    }
    return right;
};