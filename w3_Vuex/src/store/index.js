import Vue from 'vue';
// 1.引入Vuex
import Vuex from 'vuex';
// 2.使用插件
Vue.use(Vuex);
// 3.创建Store实例，并配置state参数
const store = new Vuex.Store({
    // 初始数据（购物车的数据）
    state:{
        goodslist:[{
            proId:12,
            proName:'lemon',
            proImg:'/img/lemon.jpg',
            proPrice:998,
            qty:3
        }]
    },
    mutations:{
        // 添加商品
        add2cart(state,payload){
            // state就是store.state
            // payload就是执行add2cart时传入的参数
            state.goodslist.unshift(payload);
        },

        // 删除商品
        removeFromCart(state,{proId}){
            state.goodslist = state.goodslist.filter(goods=>goods.proId!=proId)
        },

        // 修改数量
        changeQty(state,{proId,qty}){
            state.goodslist = state.goodslist.map(goods=>{
                if(goods.proId == proId){
                    goods.qty = qty
                }

                return goods;
            })
        }
    }
});

export default store;