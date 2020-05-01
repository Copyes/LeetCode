/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var l = s.length
    var count = 0
    for(var i = l - 1; i >= 0; --i){
        if(s[i] == ' '){
            if(count == 0){
                continue
            }else{
                return count
            }
        }
        count++
    }
    return count
};

var lengthOfLastWord2 = function(s) {
    var idx = s.length - 1
    while(idx >= 0){
        if(s.charAt(idx) != ' '){
            break
        }
        idx--
    }

    var end = idx
    if(idx < 0) return 0
    while(idx >= 0){
        if(s.charAt(idx) == ' '){
            break
        }
        idx-- 
    }
    return end - idx
};


console.log(lengthOfLastWord2('Hello World'))