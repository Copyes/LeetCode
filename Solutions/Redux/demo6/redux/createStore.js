export default function createStore(reducer, initialState, writeCreateStoreFunc) {
  if(writeCreateStoreFunc) {
    const newCreateStore = writeCreateStoreFunc(createStore);
    return newCreateStore(reducer, initialState);
  }
  let state = initialState;
  let listeners = [];
  //  添加订阅者
  function subscribe(listener) {
    listeners.push(listener);
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
  dispatch({type: Symbol()});
  return {
    getState,
    dispatch,
    subscribe
  }
};