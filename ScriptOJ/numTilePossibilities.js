/**
 * 你有一套活字字模 tiles，其中每个字模上都刻有一个字母 tiles[i]。返回你可以印出的非空字母序列的数目。
 * 注意：本题中，每个活字字模只能使用一次。
 * 输入："AAB"
输出：8
解释：可能的序列为 "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA"。
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
  let res = [];
  let track = '';
  backtrack(tiles, track);
  function backtrack(tiles, track) {
    if(tiles.length === 0) {
      return;
    }

    for (let i = 0; i < tiles.length; i++) {
      let cur = tiles[i];
      if(!res.includes(track+cur)) {
        res.push(track+cur);
        backtrack(tiles.substring(0,i) + tiles.substring(i+1), track+cur);
      }
    }
  }
  return res.length;
};
console.log(numTilePossibilities('AAB'));