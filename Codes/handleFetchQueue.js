/**
 * 实现一个带并发数限制的fetch请求函数
 * @param {*} urls 
 * @param {*} max 
 * @param {*} callback 
 */
function handleFetchQueue(urls, max, callback) {
  const count = urls.length;
  const requestQueue = [];
  const results = [];

  let i = 0;
  const handleRequest = (url) => {
    const req = fetch(url).then((res) => {
      console.log('current request:', requestQueue);
      const len = results.push(res);
      if(len < count && i + 1 < count) {
        requestQueue.shift();
        handleRequest(urls[++i]);
      } else if(len === count) {
        typeof callback === 'function' && callback(results);
      }
    })
    .catch((err) => {
      results.push(err);
    });
    if(requestQueue.push(req) < max) {
      handleRequest(urls[++i]);
    }
  }
  handleRequest(urls[i]);
}

const urls = Array.from({length: 10}, (v, k) => k);


function fetch(idx) {
  return new Promise((resolve, reject) => {
    console.log('request start');
    const timer = parseInt(Math.random() * 1000);
    setTimeout(() => {
      console.log(`end request ${idx}`);
      resolve(idx);
    }, timer);
  });
}

const max = 4;

const callback = () => {
  console.log('run callback');
};
console.log(urls);
handleFetchQueue(urls, max, callback);
