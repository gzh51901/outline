<template>
    <div class="">
        列表页
        <ul>
            <li v-for="item in navs" :key="item.name" @click="goto(item.path)">{{item.text}}</li>
        </ul>
        <router-view/>
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
            }]
        }
    },
    mounted(){
        console.log(this.$router)
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
