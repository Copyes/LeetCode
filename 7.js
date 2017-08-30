/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var res = 0
    while(x){  
        res = res*10 +x%10
        x = parseInt(x/10)
    }  
    if(res > Math.pow(2,31) || -res > Math.pow(2,31)){  
       res = 0
    }  
    return res
};

var reverse = function(x) {
    var INT_MAX = Math.pow(2,31)-1;    
    if(0 <= x && x < 10) return x;

    var nFlag = "";
    // x to string
    var str = x.toString();

    // reverse number string
    var rStr = str.split("").reverse().join("");

    // if x < 0, move '-'  from rStr back to front
    if(rStr.indexOf('-') != -1){
        rStr = '-' + rStr.replace('-','');    
    }

    var result = parseInt(rStr);

    if(result > INT_MAX || result < -(1+INT_MAX)) return 0;
    return result;
};

console.log(reverse(-123))