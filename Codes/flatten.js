function flat(arr) {
  let str = `[${JSON.stringify(arr).replace(/(\[|\])/g, '')}]`;
  return JSON.parse(str);
}

function flat2(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] instanceof Array) {
      result = result.concat(flat2(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

function flat3(arr) {
  return arr.reduce((prev, cur) => {
    return prev.concat(cur instanceof Array ? flat3(cur) : cur)
  }, []);
}

console.log(flat3([1,[2,3],[4,5,6]]));