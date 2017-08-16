/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let len = digits.length
    let one = 1 
    for(let i = len - 1; i >= 0; --i){
        let sum = digits[i] + one
        digits[i] = sum % 10
        one = Math.floor(sum / 10)
    }
    if(one){
        digits.unshift(1)
    }
    return digits
};

console.log(plusOne([1,2,3,4,5]))