import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';//副作用

import Api from '../api';


function* getGoodsList(action) {
    
    const {data} = yield call(Api.getData, action.payload.url,action.payload.options);
    console.log('data:',data)
    yield put({type: 'SET_GOODS_LIST', payload: data.datas.goods_list});// yield put(setGoodslist(data))

 }

 function* rootSaga(){ 
    yield takeLatest('SAGA_GOODS_LIST',getGoodsList)
 }


 export default rootSaga;