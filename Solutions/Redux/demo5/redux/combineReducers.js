export default function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers);
  
  return function combination(state = {}, action) {
    // 新的状态
    const newState = {};
    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i]
      const reducer = reducers[key];
      // 获取当前key的状态树
      const prevStateForKey = state[key];
      // 经过处理后的返回的新状态树
      const newStateForKey = reducer(prevStateForKey, action);

      newState[key] = newStateForKey;
    }
    return newState;
  }
}