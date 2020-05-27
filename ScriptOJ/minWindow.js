/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let need = {};
  let windowArr = {};
  for (const ch of t) {
    if(!need[ch]) {
      need[ch] = 1;
    } else {
      need[ch]++;
    }
  }
  let left = right = 0;
  let valid = 0;

  let start = 0, len = Infinity;

  while(right < s.length) {
    // 需要加入到窗口的数据
    let cRight = s[right];
    // 右移窗口
    right++;
    // 更新窗口内的数据
    if(need[cRight] !== undefined) {
      if(!windowArr[cRight]) {
        windowArr[cRight] = 1;
      } else {
        windowArr[cRight]++;
      }
      if(windowArr[cRight] === need[cRight]) {
        valid++; // 相当于字符种类
      }
    }
    while (valid === Object.keys(need).length) {
      if(right - left < len) {
        len = right - left;
        start = left;
      }

      let cLeft = s[left]; // 待移除窗口的字符；
      left++;
      if(need[cLeft] !== undefined) {
        if(windowArr[cLeft] === need[cLeft]) {
          valid--;
        }
        windowArr[cLeft]--;
      }
    }
  }
  return len == Infinity ? '' : s.substr(start, len);
};

console.log(minWindow('a', 'a'));