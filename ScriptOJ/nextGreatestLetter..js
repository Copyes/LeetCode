/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  let n = letters.length
  let l = 0;
  let h = n - 1;

  while (l <= h) {
    let mid = Math.floor(l + (h - l ) / 2);
    if(letters[mid] <= target) {
      l = mid + 1;
    } else {
      h = mid - 1;
    }
  }
  return l < n ? letters[l] : letters[0];
};
console.log(nextGreatestLetter(["c", "f", "j"], 'd'))