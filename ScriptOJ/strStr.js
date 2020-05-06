/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if(!needle) return 0;
  if(!haystack) return -1;
  if(haystack.length < needle.length) return -1;
  let flag = 1;
  let pos = 0;
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    pos = i;
    for (let j = 0; j < needle.length; j++) {
      if(haystack[pos++] !== needle[j]) {
        flag = 0;
        break;
      } else {
        flag = 1;
      }
    }
    if(flag === 1) return i;
  }

  return -1;
};

console.log(strStr('amsms', 'amsms'));