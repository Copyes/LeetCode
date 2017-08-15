/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let temp = {}
    let curLen = 0
    let maxLen = 0

    for(let i = 0; i < nums.length; ++i){
        temp[`${nums[i]}`] = false
    }
    for(let j = 0; j < nums.length; ++j){
        if(temp[`${nums[j]}`]){
            continue;
        }else{
            temp[`${nums[j]}`] = true
            curLen = 1
            for(let m = nums[j] + 1; !!temp[`${m}`]; ++m){
                curLen++
                temp[`${m}`] = true
            }
            for(let n = nums[j] - 1; !!temp[`${n}`]; --n){
                curLen++
                temp[`${n}`] = true
            }
            if(curLen > maxLen){  
                maxLen = curLen;  
            } 
        }
    }
    return maxLen
};



var longestConsecutive = function(nums){
    let map = {}, max = 0
    nums.forEach((item) => {
        let left = map[item - 1] || 0,
            right = map[item + 1] || 0
        
        if(!(item in map)){
            map[item] = left + right + 1
            left && (map[item - left] = map[item])
            right && (map[item + right] = map[item])
        }
        map[item] > max && (max = map[item])
    })
    return max
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2, 5]))