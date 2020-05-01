const timerMiddleware = (store) => (next) => (action) => {
  console.log('time now', Date.now());
  next(action);
}

export default timerMiddleware;