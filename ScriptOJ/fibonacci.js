/**
 * @param {number} N
 * @return {number}
 */
var valMap = {};
var fib = function(N) {
    if(valMap[`${N}`]) {
       return valMap[`${N}`];
    }
    let result = null;
    if(N < 2) {
        return N;
    } else {
        result = fib(N-1) + fib(N-2);
    }
    valMap[`${N}`] = result;

    return result;
};