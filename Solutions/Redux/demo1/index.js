const createStore = function(initialState) {
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
  function changeState(newState) {
    state = newState;
    listeners.forEach((listener) => {
      listener();
    })
  }
  return {
    getState,
    changeState,
    subscribe
  }
}
let initState = {
  counter: {
    count: 0
  },
  info: {
    name: '',
    description: ''
  }
}

let store = createStore(initState);

store.subscribe(() => {
  let state = store.getState();
  console.log(`${state.info.name}：${state.info.description}`);
});
store.subscribe(() => {
  let state = store.getState();
  console.log(state.counter.count);
});

store.changeState({
  ...store.getState(),
  info: {
    name: 'xx技术部',
    description: '欢迎来投简历'
  }
});

store.changeState({
  ...store.getState(),
  counter: {
    count: 1
  }
});
