/**
 * 无重复字符串的排列组合。编写一种方法，计算某字符串的所有排列组合，字符串每个字符均不相同。
 * 输入：S = "qwe"
 输出：["qwe", "qew", "wqe", "weq", "ewq", "eqw"]
 * @param {string} S
 * @return {string[]}
 */
var permutation = function(S) {
  let res = [];
  let track = [];
  let sArr = S.split('');
  backtrack(sArr, track);
  function backtrack(arr, track) {
    if(arr.length === track.length) {
      res.push(track.slice().join(''));
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if(track.includes(arr[i])) {
        continue;
      }

      track.push(arr[i]);
      backtrack(arr, track);
      track.pop();
    }
  }

  return res;
};

console.log(permutation("qwe"));