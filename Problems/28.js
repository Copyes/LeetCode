/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// 思路： 这题不用遍历全部的字符，只需要遍历 haystack.length - needle.length长度的
// 将该长度的字符串挨个遍历和子串每个字符进行比较。
// 如果只要有一个不一样就跳出循环，遍历下一个haystack。的字符
var strStr = function(haystack, needle) {
    var hLen = haystack.length
    var nLen = needle.length

    if(nLen === 0){
        return 0
    }
    if(nLen > hLen){
        return -1
    }
    for(var i = 0; i <= hLen - nLen; ++i){
        for(var j = 0; j < nLen; ++j){
            if(haystack[i + j] !== needle[j]){
                break
            }
        }
        if(j === nLen) return i
    }
    return -1
};
