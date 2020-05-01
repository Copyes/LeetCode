// 增加状态约束
const createStore = function(plan, initialState) {
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
  function changeState(action) {
    if(action) {
      state = plan(state, action);
      listeners.forEach((listener) => {
        listener();
      })
    }
  }
  return {
    getState,
    changeState,
    subscribe
  }
}


/*注意：action = {type:'',other:''}, action 必须有一个 type 属性*/
function plan(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state;
  }
}

let initState = {
  count: 0
}
/*把plan函数*/
let store = createStore(plan, initState);

store.subscribe(() => {
  let state = store.getState();
  console.log(state.count);
});
/*自增*/
store.changeState({
  type: 'INCREMENT'
});
/*自减*/
store.changeState({
  type: 'DECREMENT'
});
/*我想随便改 计划外的修改是无效的！*/
store.changeState({
  count: 'abc'
});