/**
 * 你有一个带有四个圆形拨轮的转盘锁。每个拨轮都有10个数字： '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' 。每个拨轮可以自由旋转：例如把 '9' 变为  '0'，'0' 变为 '9' 。每次旋转都只能旋转一个拨轮的一位数字。

锁的初始数字为 '0000' ，一个代表四个拨轮的数字的字符串。

列表 deadends 包含了一组死亡数字，一旦拨轮的数字和列表里的任何一个元素相同，这个锁将会被永久锁定，无法再被旋转。

字符串 target 代表可以解锁的数字，你需要给出最小的旋转次数，如果无论如何不能解锁，返回 -1。
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
  let deadsMap = {};
  for (const item of deadends) {
    deadsMap[item] = true;
  }
  let step = 0
  let visited = {};
  let queue = ['0000'];
  visited['0000'] = true;

  while (queue.length > 0) {
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let cur = queue.shift();

      if(deadsMap[cur]) {
        continue;
      }
      // 是否找到了当前密码
      if(cur === target) {
        return step;
      }

      for (let j = 0; j < 4; j++) {
        let up = plusOne(cur, j);
        if(!visited[up]) {
          visited[up] = true;
          queue.push(up);
        }
        let down = minusOne(cur, j);
        if(!visited[down]) {
          visited[down] = true;
          queue.push(down);
        }
      }
    }
    step++;
  }
  return -1;
};

function plusOne(str, j) {
  let strArr = str.split('');
  if(strArr[j] === '9') {
    strArr[j] = '0'
  } else {
    strArr[j] = parseInt(strArr[j]) + 1;
  }
  return strArr.join('');
}

function minusOne(str, j) {
  let strArr = str.split('');
  if(strArr[j] === '0') {
    strArr[j] = '9'
  } else {
    strArr[j] -= 1;
  }
  return strArr.join('');
}
console.log(minusOne('0000', 2));