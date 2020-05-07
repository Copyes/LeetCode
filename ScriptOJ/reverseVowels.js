/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  if(!s) return '';
  const vowelMap = ['a','e','i','o','u','A','E','I','O','U'];
  let result = Array(s.length).fill(0);
  let i = 0;
  let j = s.length - 1;

  while (i <= j) {
    let ci = s[i];
    let cj = s[j]
    if(!vowelMap.includes(ci)) {
      result[i++] = ci;
    } else if(!vowelMap.includes(cj)) {
      result[j--] = cj;
    } else {
      result[i++] = cj;
      result[j--] = ci;
    }
  }
  return result.join('');
};

console.log(reverseVowels('leetcode'));