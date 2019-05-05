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
        component:Home,
        props:{username:'laoxie',age:18},//<Home v-bind="{username:'laoxie',age:18}"/>
    },{
        name:'Cart',
        path:'/cart',
        component:Cart,
        props:function(route){//<Cart v-bind="{username:'lemon',age:38}"/>
            // 为所欲为
            return {username:'lemon',age:38}
        }
    },
    {
        path:'/list',
        redirect:'/list/phone'
    },
    {
        name:'List',
        path:'/list/:category',
        beforeEnter(to,from,next){
            console.log('beforeEnter');
            next();
        },
        component:List,
        // children:[{
        //     // 当浏览器地址为/list/phone 渲染Phone组件
        //     path:'phone',
        //     component:Phone
        // },{
        //     path:'computer',
        //     component:Computer
        // },{
        //     path:'pad',
        //     component:Pad
        // }]
    },{
        name:'Goods',
        path:'/goods/:id',//动态路由
        component:Goods,
        props:true //原理<Goods v-bind="$route.params"/>
    }]
})

// 全局路由守卫
router.beforeEach((to,from,next)=>{
    console.log('beforeEach');
    next();
})
router.afterEach((to,from)=>{
    console.log('afterEach')
})

export {
    router
}
export default router;