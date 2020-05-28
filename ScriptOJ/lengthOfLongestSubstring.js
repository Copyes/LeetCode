/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let windowArr = [];

  let left = right = 0;
  let res = 0;
  while (right < s.length) {
    let chRight = s[right];
    right++;
    if(windowArr[chRight] === undefined) {
      windowArr[chRight] = 1;
    } else {
      windowArr[chRight]++;
    }

    while (windowArr[chRight] > 1) {
      let chLeft = s[left];
      left++;
      windowArr[chLeft]--;
    }
    res = Math.max(res, right-left);
  }
  return res;
};