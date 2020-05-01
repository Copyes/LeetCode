/**
 * @param {string[]} strs
 * @return {string}
 */

// 
var longestCommonPrefix = function(strs) {
    if(strs.length < 2) return !!strs[0] ? strs[0] : ''
    
    var prefix = ''
    var minLen = strs[0].length
    var len = strs.length
    // 先找最短字符串
    for(var i = 0; i < len; ++i){
        if(strs[i].length < minLen) minLen = strs[i].length
    }
    // 遍历所有数组，找不相同的
    for(var m = 0; m < minLen; m++){
        for(var n = 0; n < len - 1; n++){
            if(strs[n][m] !== strs[n+1][m]){
                if(m > 0){
                    prefix += strs[0].substr(0, m)   
                }
                return prefix
            }
        }
    }

    return strs[0].substr(0, minLen)
};
let strs = [
    'x',
    'x'
]
console.log(longestCommonPrefix(strs))