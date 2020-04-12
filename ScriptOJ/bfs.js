const data = [
  {
      name: 'a',
      children: [
          { name: 'b', children: [{ name: 'e' }] },
          { name: 'c', children: [{ name: 'f' }] },
          { name: 'd', children: [{ name: 'g' }] },
      ],
  },
  {
      name: 'a2',
      children: [
          { name: 'b2', children: [{ name: 'e2' }] },
          { name: 'c2', children: [{ name: 'f2' }] },
          { name: 'd2', children: [{ name: 'g2' }] },
      ],
  }
]

function bfs(data) {
  let result = [];
  let queue = data;
  while (queue.length > 0) {
    [...queue].forEach((item) => {
      queue.shift();
      result.push(item.name);
      item.children && (queue.push(...item.children))
    })
  }
  return result.join(',')
}

console.log(bfs(data));