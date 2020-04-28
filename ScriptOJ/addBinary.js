/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var aLen = a.length;
    var bLen = b.length;
    var res = [];
    var a = a.split('');
    var b = b.split('');
    var carry = 0;

    if(aLen < bLen) {
      for (let i = 0; i < bLen - aLen; i++) {
        a.unshift(0);
      }
    }
    if(aLen > bLen) {
      for (let j = 0; j < aLen - bLen; j++) {
        b.unshift(0);
      }
    }

    for (let i = Math.max(aLen, bLen) - 1; i >= 0; i--) {
      let sum = Number(a[i]) + Number(b[i]) + carry;
      res.unshift(sum%2);
      carry = Math.floor(sum/2);
    }
    
    if(carry) {
      res.unshift(1);
    }
    return res.join('');
};

console.log(addBinary('11', '1'));