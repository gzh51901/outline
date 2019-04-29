<template>
    <div class="myapp">
       <TodoList></TodoList>
        <br><br>
       <!-- <Carousel></Carousel> -->

       <br><br>
       <Keepalive></Keepalive>

       <br><br>
       <Donghua></Donghua>
    </div>
</template>
<script>
    import TodoList from '@com/TodoList';
    import Carousel from '@com/Carousel';
    import Keepalive from '@com/Keepalive';
    import Donghua from '@com/Donghua';
    export default {
        data:function(){
            return {
                username:'lemon'
            }
        },
        components:{
            TodoList,
            Carousel,
            Keepalive,
            Donghua
        }
    }
</script>
<style>
    /*
        css部分
    */
</style>