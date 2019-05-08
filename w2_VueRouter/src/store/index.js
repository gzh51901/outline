/**
 * store模块化
 *  * 全局数据
 *  * 购物车数据
 *  ...
 */
import Vue from 'vue';
// 1.引入Vuex
import Vuex from 'vuex';
// 2.使用插件
Vue.use(Vuex);

// vuex模块化
import cart from './cart';
import common from './common';

// 3.创建Store实例，并配置state参数
const store = new Vuex.Store({

    modules:{
        cart,
        common
    }

    
});

export default store;