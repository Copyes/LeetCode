/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let resultArr = [];
    let xStr = x.toString();
    for(let i = xStr.length - 1; i > 0; i--) {
      resultArr.push(xStr[i]);
    }
    if(xStr[0] === '-') {
      resultArr.unshift('-');
    }
    resultArr.push(xStr[0]);

    let resultNum = parseInt(resultArr.join(""));

    if(resultNum <= Math.pow(-2, 31) || resultNum >= Math.pow(2, 31)) {
      return 0;
    }
    return resultNum;
};

console.log(reverse(320));