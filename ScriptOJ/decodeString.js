/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let multi = 0;
  let multiStack = [];
  let resStack = [];
  let res = '';
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if(c === '[') {
      multiStack.push(multi);
      resStack.push(res);
      multi = 0;
      res = '';
    } else if(c === ']'){
      let temp = '';
      let curMulti = multiStack.pop();
      for (let j = 0; j < curMulti; j++) {
        temp += res;
      }
      res = resStack.pop() + temp;
    } else if(parseInt(c) >= 0 && parseInt(c) <= 9) {
      multi = multi * 10 + parseInt(c);
    } else {
      res += c;
    }
  }
  return res;
};
