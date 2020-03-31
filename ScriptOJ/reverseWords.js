/**
 * 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
  输入: "Let's take LeetCode contest"
  输出: "s'teL ekat edoCteeL tsetnoc" 
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const wordsArr = s.split(' ');
  for(let i = 0; i < wordsArr.length; i++) {
    let str = wordsArr[i].split('');
    let m = 0;
    let n = str.length;
    let temp = null;
    while (m < n) {
      if(str[m] !== str[n]) {
        temp = str[m];
        str[m] = str[n];
        str[n] = temp;
      }
      m++;
      n--;
    }
    wordsArr[i] = str.join('');
  }
  return wordsArr.join(' ');
};

var reverseWords2 = function(s) {
  const wordsArr = s.split(' ');
  let result = '';
  wordsArr.forEach((item) => {
    result += `${item.split('').reverse().join('')} `;
  });
  return result.substring(0, result.length-1);
};

console.log(reverseWords2("Let's take LeetCode contest"));