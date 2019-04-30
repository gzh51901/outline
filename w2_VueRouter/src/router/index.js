import Vue from 'vue';

// 1.引入vue-router
import VueRouter from 'vue-router';
// 2.安装插件
Vue.use(VueRouter);

import Home from '@/pages/Home.vue';
import Cart from '@/pages/Cart.vue';
import List from '@/pages/List.vue';
import Goods from '@/pages/Goods.vue';

// List的子路由（嵌套路由）
const Phone = {
    template:`<div>手机</div>`
}
const Computer = {
    template:`<div>电脑</div>`
}
const Pad = {
    template:`<div>平板</div>`
}

// 3.实例化router并配置参数
const router = new VueRouter({
    // mode:'history',
    routes:[{
        path:'/',
        redirect:'/home'
    },{
        name:'Home',
        path:'/home',
        component:Home
    },{
        name:'Cart',
        path:'/cart',
        component:Cart,
    },{
        name:'List',
        path:'/list',
        component:List,
        children:[{
            // 当浏览器地址为/list/phone 渲染Phone组件
            path:'phone',
            component:Phone
        },{
            path:'computer',
            component:Computer
        },{
            path:'pad',
            component:Pad
        }]
    },{
        name:'Goods',
        path:'/goods/:id',//动态路由
        component:Goods
    }]
})

export {
    router
}
export default router;