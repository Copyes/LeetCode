// Given a collection of distinct numbers, return all possible permutations.
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var len = nums.length
    if(len < 2){
        return [nums]
    }
    var result = []
    var addNum = function(used, arr){
        var temp = arr.slice(0)
        for(var i = 0; i < len; ++i){
            if(used[i] === true){
                continue
            }
            temp.push(nums[i])
            if(temp.length === len){
                return result.push(temp)
            }
            used[i] = true
            addNum(used, temp)
            used[i] = false
            temp.pop()
        }
    }
    addNum([],[])
    return result
};

console.log(permute([1,2,3]))