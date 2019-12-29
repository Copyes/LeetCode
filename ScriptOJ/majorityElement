/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const tempTotal = Math.ceil(nums.length/2);
    const mapObj = {};
    let result = null;
    for(let i = 0; i < nums.length; i++){
      if(mapObj[nums[i]] === undefined) {
        mapObj[nums[i]] = 1;
      } else {
        mapObj[nums[i]]++;
      }
    }
    Object.keys(mapObj).forEach((item) => {
      mapObj[item] >= tempTotal && (result = item);
    })

    return result;
};

console.log(majorityElement([2,2,1,1,1,2,2]))