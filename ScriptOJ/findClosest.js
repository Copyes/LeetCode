/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var findClosest = function(words, word1, word2) {
  let pos1 = -1;
  let pos2 = -1;
  let res = words.length;
  for (let i = 0; i < words.length; i++) {
    if(words[i] === word1) {
      pos1 = i;
    } else if(words[i] === word2) {
      pos2 = i;
    }
    if(pos1 !== -1 && pos2 !== -1) {
      res = Math.min(res, Math.abs(pos1 - pos2));
    }
    if(res === 1) {
      break;
    }
  }
  return res;
};