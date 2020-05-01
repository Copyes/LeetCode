/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(var i = 0; i < nums.length; ++i){
        var index = nums.indexOf(target - nums[i])
        if(index > -1 && i !== index){
            return [i, index]
        }
    }
}

var arr = [2, 7, 11, 15]
var target = 9
twoSum(arr, target)
