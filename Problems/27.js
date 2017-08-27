/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var j = 0
    for(var i = 0; i < nums.length; ++i){
        if(nums[i] !== val){
            nums[j++] = nums[i]
        }
    }
    return j
}


console.log(removeElement([3,2,2,3], 3))