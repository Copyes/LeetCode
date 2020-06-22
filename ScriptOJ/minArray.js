/**
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
  let left = 0;
  let right = numbers.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if(numbers[mid] < numbers[right]) {
      right = mid;
    } else if(numbers[mid] > numbers[right]) {
      left = mid + 1;
    } else {
      right--;
    }
  }
  return numbers[left];
};