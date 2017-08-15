/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var len = nums.length
    if(len === 0){
        return 0
    }
    var previous = Math.max(0, nums[0]),
        max = nums[0]

    for(var i = 1; i < len; ++i){
        previous = Math.max(previous + nums[i], nums[i]);
        console.log(previous)
        max = Math.max(previous, max);
    }
    return max
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
