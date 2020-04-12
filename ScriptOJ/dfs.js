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

function dfs(data) {
  let result = [];
  
  data.forEach((item) => {
    const map = data => {
      result.push(data.name);  
      data.children && data.children.forEach(child => map(child));
    }
    map(item);
  })
  return result.join(',')
}

console.log(dfs(data));