<template>
    <div class="">
        列表页
        <ul>
            <li v-for="item in navs" :key="item.name" @click="goto(item.path)">{{item.text}}</li>
        </ul>
        <!-- <router-view/> -->
        <div>当前分类：{{$route.params.category}}</div>
    </div>
</template>
<script>

export default {
    data(){
        return {
            navs:[{
                name:'Phone',
                path:'/list/phone',
                text:"手机"
            },{
                name:'Computer',
                path:'/list/computer',
                text:"电脑"
            },{
                name:'Pad',
                path:'/list/pad',
                text:"平板"
            }],
            // num:1
        }
    },
    mounted(){
        console.log('mounted:',this.$route)

        // setTimeout(()=>{
        //     this.num++;
        // },3000)
    },
    watch:{
        num(val, oldVal){// 当num有修改时，执行这里的代理
            console.log(val,oldVal)
        },
        $route(val,oldVal){
            console.log(666)
        }
    },

    // 组件内的守卫
    beforeRouteUpdate(to,from,next){
        console.log('beforeRouteUpdate');

        // 调用next进入目标路由
        next();
    },
    methods:{
        goto(path){
            // push有浏览器记录
            // this.$router.push(path)

            // replace无浏览器记录
            this.$router.replace(path)
            
        }
    }
}
</script>
