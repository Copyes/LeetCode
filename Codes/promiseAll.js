function PromiseAll(arr) {
  return new Promise((resolve, reject) => {
    let result = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      arr[i]
      .then((res) => {
        result.push(res);
        count++;
        if(count === arr.length) {
          return resolve(result);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      
    }
  });
}