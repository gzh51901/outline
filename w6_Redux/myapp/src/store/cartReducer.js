
let defaultState = {
    goodslist:[],
    totalPrice:0
}
const reducer = (state=defaultState,{type,payload})=>{
    switch(type){
        case 'ADD_TO_CART':
            return {
                ...state,
                goodslist:[payload,...state.goodslist]
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                goodslist:state.goodslist.filter(goods=>goods.goods_id!==payload)
            }
        case 'CHANGE_QTY':
        return {
            ...state,
            goodslist:state.goodslist.map(goods=>{
                if(goods.goods_id === payload.goods_id){
                    goods.qty = payload.qty
                }
                return goods;
            })
        }
        default:
            // 默认返回初始化数据
            return state
    }
}

export default reducer;