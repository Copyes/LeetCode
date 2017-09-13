/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var len = nums.length
    if(len === 0) return 0
    var temp = nums[0]
    var j = 1;
    for(var i = 0; i < len; ++i){
        if(nums[i] !== temp){
            nums[j] = nums[i]
            temp = nums[i]
            j++
        }
    }
    return j
};