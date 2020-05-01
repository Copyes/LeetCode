export default function createStore(reducer, initialState, writeCreateStoreFunc) {
  // initialState 不传的时候作处理
  if(typeof initialState === 'function') {
    writeCreateStoreFunc = initialState;
    initialState = undefined;
  }

  if(writeCreateStoreFunc) {
    const newCreateStore = writeCreateStoreFunc(createStore);
    return newCreateStore(reducer, initialState);
  }

  let state = initialState;
  let listeners = [];
  //  添加订阅者
  function subscribe(listener) {
    listeners.push(listener);
    return function unsubscribe() {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    }
  }
  // 返回当前全局状态
  function getState() {
    return state;
  }
  // 通知各个订阅方，有新的状态了
  function dispatch(action) {
    if(action) {
      state = reducer(state, action);
      listeners.forEach((listener) => {
        listener();
      })
    }
  }
  // reducer 拆分后，和组件是一一对应的。
  // 我们就希望在做按需加载的时候，reducer也可以跟着组件在必要的时候再加载，然后用新的 reducer 替换老的 reducer。
  function replaceReducer(newReducer) {
    reducer = newReducer;
    dispatch({ type: Symbol()});
  }

  dispatch({type: Symbol()});
  return {
    getState,
    dispatch,
    subscribe,
    replaceReducer
  }
};