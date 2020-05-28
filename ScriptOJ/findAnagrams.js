/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let need = {};
  let windowArr = {};
  for (const ch of p) {
    if(need[ch] === undefined) {
      need[ch] = 1;
    } else {
      need[ch]++;
    }
  }
  let left = right = 0;
  let valid = 0;
  let res = [];
  while (right < s.length) {
    let chRight = s[right];
    right++;
    if(need[chRight] !== undefined) {
      if(windowArr[chRight] === undefined) {
        windowArr[chRight] = 1;
      } else {
        windowArr[chRight]++;
      }
      if(windowArr[chRight] === need[chRight]) {
        valid++;
      }
    }

    while (right - left >= p.length) {
      if(valid === Object.keys(need).length) {
        res.push(left);
      }

      let chLeft = s[left];
      left++;
      if(need[chLeft] !== undefined) {
        if(windowArr[chLeft] === need[chLeft]) {
          valid--;
        }
        windowArr[chLeft]--;
      }
    }
  }
  return res;
};

console.log(findAnagrams('cbaebabacd', 'abc'));