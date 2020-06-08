/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
  let res = new Set();
  let track = [];
  let strArr = s.split('');
  let visited = [];
  backtrack(strArr, track, visited);
  function backtrack(arr, track) {
      if(arr.length === track.length) {
          res.add(track.slice().join(''));
          return ;
      }

      for(let i = 0; i < arr.length; i++) {
          if(visited[i]) {
              continue;
          }
          visited[i] = true;
          track.push(arr[i]);
          backtrack(arr, track);
          track.pop();
          visited[i] = false;
      }
  }

  return Array.from(res);
};

console.log(permutation("aac"));