<template>
    <div class="carousel">
        <!-- is属性值可以是以下内容 => 组件名：tab-laoxie，组件选项对象：{data,computed,template...} -->
        <component :is="activeComponent"></component>
    </div>
</template>
<script>
export default {
    data(){
        return {
            users:[{
                username:'laoxie',
                img:'laoxie.jpg'
            },{
                username:'tiantian',
                img:'tiantian.jpg'
            },{
                username:'jingjing',
                img:'jingjing.jpg'
            },{
                username:'tingting',
                img:'tingting.jpg'
            },{
                username:'lemon',
                img:'lemon.jpg'
            },{
                username:'malin',
                img:'malin.jpg'
            },{
                username:'laoyao',
                img:'laoyao.jpg'
            }],
            currentIndex:0,
        }
        
    },
    computed:{
        activeComponent(){
            let currentUser = this.users[this.currentIndex];
            return {
                name:currentUser.username,
                template:`<div class="item"><img src="img/${currentUser.img}"/></div>`
            }
        }
    },
    created(){
        // this.allcomponent = this.users.map(item=>{
        //     return {
        //         name:item.username,
        //         template:`<div class="item"><img src="img/${item.img}"/></div>`
        //     }
        // });

        setInterval(()=>{
            this.currentIndex++;
            if(this.currentIndex>=this.users.length){
                this.currentIndex = 0;
            }
        },3000);
    }
}
</script>
