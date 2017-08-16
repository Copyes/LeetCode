/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let low = 0, high = nums.length - 1
    while(low <= high){
        let mid = Math.floor((low + high) / 2)
        if(nums[mid] === target) return mid
        else if(nums[mid] > target) high = mid - 1
        else low = mid + 1
    }
    return low
};

var searchInsert2 = function(nums, target) {
    let pos = 0
    for(let i = nums.length - 1; i >=0; --i){
        if(nums[i] === target){
            pos = i
        }else if(nums[i] < target){
            return pos = i + 1
        }
    }
    return pos
}
console.log(searchInsert2([1,3,5,7], 2))