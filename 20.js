/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var str = s
    var sortStr = ['(','[','{']
    var stack = []

    var len = str.length
    for(var i = 0; i < len; ++i){
        if(sortStr.indexOf(str[i]) > -1){
            stack.push(str[i])
            continue
        }
        switch(str[i]){
            case ')':
                if(stack.pop() === '('){
                    continue
                }else{
                    return false
                }
                break
            case ']':
                if(stack.pop() === '['){
                    continue
                }else{
                    return false
                }
                break
            case '}':
                if(stack.pop() === '{'){
                    continue
                }else{
                    return false
                }
                break
            default:
                return false
        }
    }
    if(stack.length > 0){
        return false
    }
    return true
}
var str = '([]'
console.log(isValid(str))
