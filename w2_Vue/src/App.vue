<template>
    <div>
        <!-- 放置组件的html部分 -->
        <h1>Vue单文件组件</h1>
        <p>用户名：{{username}}</p>
        <Cart/>
    </div>
</template>
<script>
    // js部分
    // ES module

    import Cart from './pages/Cart.vue';
    export default {
        data:function(){
            return {
                username:'lemon'
            }
        },
        components:{
            Cart
        }
    }

    // 把username写入模块对象
    export let username='laoxie'
</script>
<style>
    /*
        css部分
    */
</style>