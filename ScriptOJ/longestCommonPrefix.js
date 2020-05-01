var longestCommonPrefix = function(strs) {
  if(!strs || !strs.length) return '';
  return lCPrefixRec(strs);
}

var lCPrefixRec = function(strs) {
  let length = strs.length
  if(length === 1) {
    return strs[0];
  }

  var mid = Math.floor(strs/2);
  var left = strs.slice(0,mid);
  var right = strs.slice(mid, length);

  return lCPrefixTwo(lCPrefixRec(left), lCPrefixRec(right));
}

var lCPrefixTwo = function(str1, str2) {
  let j = 0;
  for (; j < str1.length && j < str2.length; j++) {
    if(str1.charAt(j) !== str2.charAt(j)) break;
  }
  return str1.substring(0, j);
}