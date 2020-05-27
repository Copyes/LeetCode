/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  let need = {};
  let windowArr = {};

  for (const ch of s1) {
    if(need[ch] === undefined) {
      need[ch] = 1;
    } else {
      need[ch]++
    }
  }

  let left = right = 0;
  let valid = 0;

  while (right < s2.length) {
    let chRight = s2[right];
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
    while (right - left >= s1.length) {
      if(valid === Object.keys(need).length) {
        return true;
      }
      let chLeft = s2[left];
      left++;
      if(need[chLeft] !== undefined) {
        if(windowArr[chLeft] === need[chLeft]) {
          valid--
        }
        windowArr[chLeft]--;
      }
    }
  }
  return false;
};