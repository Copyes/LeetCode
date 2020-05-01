/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var len = s.length
    if(len <= 1){
        return len
    }
    var subStr = ''
    var max = ''

    for(var i = 0; i < len; ++i){
        if(subStr.indexOf(s[i]) > -1){
            subStr = subStr.substring(subStr.indexOf(s[i]) + 1) + s[i]
        }else{
            subStr += s[i]
        }
        if(max.length < subStr.length){
            max = subStr
        }
    }
    return max.length
};

console.log(lengthOfLongestSubstring("dvdf"))