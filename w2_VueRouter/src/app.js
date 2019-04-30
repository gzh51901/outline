
import Vue from 'vue';
import App from './App.vue';

import router from './router';

// 只支持ajax请求
import axios from "axios";

// 给Vue的原型对象添加属性，方便所有子组件获取
Vue.prototype.$axios = axios;

new Vue({
    // 4.把router实例注入到vue实例中
    router,
    render(h){
        return h(App);
    }
}).$mount('#app');