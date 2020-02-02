/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let xStr = x.toString();
    let i = 0;
    let j = xStr.length - 1;
    while (i < j) {
      if(xStr[i] === xStr[j]) {
        i++;
        j--;
      } else {
        return false;
      }
    }
    return true;
};

console.log(isPalindrome(121));