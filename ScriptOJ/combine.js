/**
 * 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 * 输入: n = 4, k = 2
输出:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let res = [];
  let track = [];
  let start = 1;
  backtrack(start, track);
  function backtrack(start,track) {
    if(track.length === k) {
      res.push(track.slice());
      return;
    }

    for (let i = start; i <= n; i++) {
      if(track.includes(i)) {
        continue;
      }
      track.push(i);
      backtrack(i+1, track);
      track.pop();
    }
  }

  return res;
};

console.log(combine(4,2));