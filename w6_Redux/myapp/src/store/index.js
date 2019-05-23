import {createStore,combineReducers,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {composeWithDevTools as devTools } from 'redux-devtools-extension';

import cartReducer from './cartReducer';
import commonReducer from './commonReducer';

import rootSaga from '../saga';

// 1.创建saga中间件
const sagaMiddleware = createSagaMiddleware();

// 2.将 sagaMiddleware 连接至 Store
let store = createStore(combineReducers({
    cart:cartReducer,
    common:commonReducer
}),applyMiddleware(sagaMiddleware));

// 3.运行 Saga配置
sagaMiddleware.run(rootSaga);

export default store;