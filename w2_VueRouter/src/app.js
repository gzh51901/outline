
import Vue from 'vue';
import App from './App.vue';

import router from './router';
import store from './store';

// 刷新页面，从本地存储中获取token并更新到vuex
let token = localStorage.getItem('Authorization');
if(token){
    store.commit('login',token);
}

// 只支持ajax请求
import axios from "axios";

// 请求拦截
axios.interceptors.request.use(config=>{
    // 每一次请求都带上token
    if(token){

        config.headers.Authorization = 'token ' + token
    }
    
    return config;
})

// 响应拦截
axios.interceptors.response.use(res=>{
    //操作相应数据
    console.log('成功：',res)
    return res
},err=>{//401
    console.log('错误：',err);

    // 当前路由是否需要登录权限
    if(router.currentRoute.meta.requiresAuth){
        router.replace({
            path:'/login',
            query:{
                redirect:router.currentRoute.fullPath
            }
        })

        store.commit('logout');
        localStorage.removeItem('Authorization');

        return 
    }
    return Promise.reject(err)
})


// 给Vue的原型对象添加属性，方便所有子组件获取
// axios.defaults.baseURL = 'http://localhost:19011';
Vue.prototype.$axios = axios;

new Vue({
    // 4.把router实例注入到vue实例中
    router,

    // 4.将创建好的store注入到Vue根实例里
    store,
    render(h){
        return h(App);
    }
}).$mount('#app');