/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permuteUnique = function(nums) {
    var len = nums.length
    if(len < 2){
        return [nums]
    }
    var result = []
    function addNum(used, arr){
        var temp = arr.slice(0)
        for(var i = 0; i < len; ++i){
            if(used[i] === true){
                continue
            }
            temp.push(nums[i])
            console.log(temp)
            if(temp.length === len){
                return result.push(temp)
            }
            used[i] = true
            addNum(used, temp)
            used[i] = false
            temp.pop()
            console.log(temp)
        }
    }
    addNum([], [])
    return result
};

console.log(permuteUnique([1,1,2]))