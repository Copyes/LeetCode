/**
 * 括号。设计一种算法，打印n对括号的所有合法的（例如，开闭一一对应）组合。
 * 说明：解集不能包含重复的子集。
 * 例如，给出 n = 3，生成结果为：
 * [
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let res = [];
  function backtrack(left, right, str) {
    if(left === 0 && right === 0) {
      res.push(str);
      return;
    }

    if (left > 0) {
      backtrack(left-1, right, str + '(');
    }
    if(right > left) {
      backtrack(left, right-1, str + ')');
    }
  }
  backtrack(n, n, '');
  return res;
};


var generateParenthesis = function(n) {
  let res = [];

  function backtrack(left, right, arr) {
    if(left === 0 && right === 0) {
      res.push(arr.slice().join(''));
      return;
    }
    if(left > right) {
      return;
    }

    if(left > 0) {
      arr.push('(');
      backtrack(left-1, right, arr);
      arr.pop();
    }

    if(right > 0) {
      arr.push(')');
      backtrack(left, right-1, arr);
      arr.pop();
    }
  }
  backtrack(n, n, []);
  return res;
};

console.log(generateParenthesis(3));

