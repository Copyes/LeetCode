// 拆分reducer，多文件管理协作
function combineReducers(reducers) {
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

const createStore = function(reducer, initialState) {
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
  return {
    getState,
    dispatch,
    subscribe
  }
}

function InfoReducer(state, action) {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.name
      }
    case 'SET_DESC':
      return {
        ...state,
        description: action.description
      }
    default:
      return state;
  }
}

function CounterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      }
    case 'DECREMENT': 
      return {
        count: state.count - 1
      }
    default:
      return state;
  }
}

const reducers = combineReducers({
  info: InfoReducer,
  counter: CounterReducer
});

let initState = {
  counter: {
    count: 0
  },
  info: {
    name: '',
    description: ''
  }
}

let store = createStore(reducers, initState);

store.subscribe(() => {
  let state = store.getState();
  console.log(state.counter, state.info);
});
store.dispatch({
  type: 'INCREMENT'
});

// store.dispatch({
//   type: 'INCREMENT'
// })

store.dispatch({
  type: 'DECREMENT'
})

store.dispatch({
  type: 'SET_NAME',
  name: 'xx国际技术部'
})


