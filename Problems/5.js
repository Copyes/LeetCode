// judge which kind of Palindromic
var Palindromic = function(s, begin, end){
    while(begin >= 0 &&  end < s.length  && s[begin] === s[end]){
        --begin
        ++end
    }
    return end - begin - 1
}
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var len = s.length
    if(s == null || len == 1){
        return s
    }

    var begin = 0,
        end = 0

    for(var i = 0; i < len; ++i){
        var maxLen = Math.max(Palindromic(s, i, i), Palindromic(s, i, i + 1))
        if(maxLen > end){
            begin = i - Math.floor((maxLen - 1) / 2)
            end = maxLen
        }
    }
    return s.substr(begin, end)
};

console.log(longestPalindrome('sqbabad'))