<template>
    <el-container style="height: 500px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu 
            class="el-menu-vertical-demo"
            router
            >
                <el-menu-item :index="item.path" v-for="item in pages" :key="item.name">
                    <i :class="item.icon"></i>
                    <span slot="title">{{item.text}}</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header>首页>列表</el-header>
            <el-main>
                <!-- 显示组建内容 -->
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
    import Vue from 'vue';
    import ElementUI from 'element-ui';
    import 'element-ui/lib/theme-chalk/index.css';
    Vue.use(ElementUI);

    export default {
        data:function(){
            return {
               pages:[{
                   name:'Home',
                   path:'/home',
                   icon:'el-icon-s-home',
                   text:'首页'
               },{
                   name:'List',
                   path:'/list',
                   icon:'el-icon-s-unfold',
                   text:'列表'
               },{
                   name:'Goods',
                   path:'/goods',
                   icon:'el-icon-s-goods',
                   text:'商品'
               },{
                   name:'Cart',
                   path:'/cart',
                   icon:'el-icon-shopping-cart-full',
                   text:'购物车'
               }]
            }
        },
        components:{
        }
    }
</script>
<style>
.active{color:#f00;font-weight: bold}
</style>