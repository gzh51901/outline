export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const CHANGE_QTY = 'CHANGE_QTY'

// 添加商品到购物车
export function add2cart(goods){
    return {
        type:ADD_TO_CART,
        payload:goods
    }
}

// 删除购物车商品
export function remove(goods_id){
    return {
        type:REMOVE_FROM_CART,
        payload:goods_id
    }
}

// 修改购物车商品数量
export function changeQty(goods_id,qty){
    return {
        type:CHANGE_QTY,
        payload:{goods_id,qty}
    }
}

export default {
    add2cart,
    remove,
    changeQty
}
