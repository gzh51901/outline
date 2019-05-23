/**
 * 全局reducer
 */
import {LOGIN,LOGOUT,SET_GOODS_LIST} from '../acions/common';

let defaultState = {
   token:'',
   goodslist:[]
}

const reducer = (state=defaultState,{type,payload})=>{
    switch(type){
        case LOGIN:
            return {
                ...state,
                token:payload
            }
        case LOGOUT:
            return {
                ...state,
                token:''
            }
        case SET_GOODS_LIST:
            return {
                ...state,
                goodslist:payload
            }
        default:
            return state;
    }
}

export default reducer;

