// state的拆分
// 拆分reducer，多文件管理协作
import { combineReducers, createStore } from './redux';
import InfoReducer from './reducers/info';
import CounterReducer from './reducers/counter';
import loggerMiddleware from './middlewares/loggerMiddleware';
import timerMiddleware from './middlewares/timerMiddleware';
import exceptionMiddleware from './middlewares/exceptionMiddleware';

const reducers = combineReducers({
  info: InfoReducer,
  counter: CounterReducer
});

let store = createStore(reducers);
let next = store.dispatch;

let logger = loggerMiddleware(store);
let timer = timerMiddleware(store);
let exception = exceptionMiddleware(store);

store.dispatch = exception(logger(timer(next)));


store.subscribe(() => {
  let state = store.getState();
  console.log(state.counter, state.info);
});
store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'DECREMENT'
})

store.dispatch({
  type: 'SET_NAME',
  name: 'xx国际技术部'
})


