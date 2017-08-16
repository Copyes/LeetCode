/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var answer = []
    var nums = nums.sort(function(a,b){
        return a - b
    })
    var l = nums.length 
    for(var i = 0; i < l - 2; ++i){
        if(i == 0 || (i > 0 && nums[i] !== nums[i-1])){
            var low = i + 1, high = l - 1, sum = -nums[i]
            while(low < high){
                if(nums[low] + nums[high] === sum){
                    answer.push([nums[i], nums[low], nums[high]])
                    while((low < high) && (nums[low] === nums[low+1])){
                        low++
                    }
                    while(low < high && nums[high] === nums[high - 1]){
                        high--
                    }
                    low++;
                    high--;
                }else if(nums[low] + nums[high] < sum){
                    low++
                }else{
                    high--
                }
            }
        }
    }
    return answer
};

console.log(threeSum([-1,0,1,2,-1,-4]))