/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false
    x = String(x).split('')
    var len = x.length - 1,i = 0
    while(i < len){
        if(x[i] !== x[len - i]){
            return false
        }
        ++i
    }
    return true
};

var isPalindrome2 = function(x) {
    if(x < 0 || (x !== 0 && x % 10 === 0)) {
        return false;
      }
    let y = 0;
    while(x > y) {
        y = (y * 10) + x % 10;
        x = Math.floor(x / 10);
    }
    return (x === y || x === Math.floor(y / 10));
};

console.log(isPalindrome(11))