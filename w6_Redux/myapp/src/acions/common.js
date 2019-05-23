export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const SET_GOODS_LIST = 'SET_GOODS_LIST'

export function login(token){
    return {
        type:LOGIN,
        payload:token
    }
}

export function logout(){
    return {
        type:LOGOUT
    }
}

export function setGoodslist(goodslist){
    return {
        type:SET_GOODS_LIST,
        payload:goodslist
    }
}

export default {
    login,
    logout
}