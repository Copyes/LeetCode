/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = {
      '{': '}',
      '[': ']',
      '(': ')'
    }
    let temp = [];
    for (let i = 0; i < s.length; i++) {
      let str = s[i];
      let top = temp[temp.length-1];
      if(map[top] === str) {
        temp.pop();
      } else {
        temp.push(str);
      }
    }
    if(temp.length > 0) {
      return false;
    }
    return true;
};

console.log(isValid("]"));