/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let sum = 0;
  for (let i = 1; i < height.length - 1; i++) {
    let maxLeft = 0;
    for (let j = i-1; j >= 0; j--) {
      if(height[j] > maxLeft) {
        maxLeft = height[j];
      }
    }

    let maxRight = 0;
    for (let j = i+1; j < height.length; j++) {
      if(height[j] > maxRight) {
        maxRight = height[j];
      }
    }

    let min = Math.min(maxLeft,maxRight);
    if(height[i] < min) {
      sum += (min - height[i]);
    }
  }
  return sum;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));