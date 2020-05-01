const applyMiddleware = (...middlewares) => {
  return function rewriteCreateStoreFunc(oldCreateStore) {
    return function newCreateStore(reducer, initialState) {
      const store = oldCreateStore(reducer, initialState);
      // 给每个中间件注入store对象，相当于：
      // let logger = loggerMiddleware(store);
      // 最终 chain = [exception. timer, logger];
      // 只传递状态树给中间件，最小开放原则
      const simpleStore = {getState: store.getState};
      const chain = middlewares.map((middleware) => middleware(simpleStore));
      // 相当于next
      let dispatch = store.dispatch;
      // 实现exception(timer(logger(dispatch)));
      // 此处可以用compose实现
      chain.reverse().map((middleware) => {
        dispatch = middleware(dispatch);
      })
      // 重写dispatch函数
      store.dispatch = dispatch;
      return store;
    }
  }
}

export default applyMiddleware;