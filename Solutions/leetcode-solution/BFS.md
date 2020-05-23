### 介绍
以下为解决相关BFS问题的通用模版;


### BFS解题模版
```js
function BFS(start, target) {
  let queue = [];
  let visited = {};

  queue.push(start);
  visited[start] = true;

  let step = 0;

  let step = 0;
  while(queue.length !== 0) {
    let len = queue.length;
    for(let i = 0; i < len; i++) {
      let cur = queue.shift();
      if(cur === target) {
        return step;
      }
      for(x in cur.adj) {
        if(!visited[x]) {
          queue.push(x);
          visited[x] = true;
        }
      }
    }
    step++;
  }
}
```

### 题目列表

- [x] 111. 二叉树的最小深度 https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
- [x] 面试题 04.03. 特定深度节点链表 https://leetcode-cn.com/problems/list-of-depth-lcci/
- [x] 559. N叉树的最大深度 https://leetcode-cn.com/problems/maximum-depth-of-n-ary-tree/
- [x] 面试题32 从上到下打印二叉树 II https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/
- [x] 107. 二叉树的层次遍历 II https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/