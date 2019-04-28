<template>
    <div class="myapp">
       <TodoList></TodoList>
        <br><br>
       <!-- <Carousel></Carousel> -->

       <br><br>
       <Keepalive></Keepalive>
    </div>
</template>
<script>
    import TodoList from '@com/TodoList';
    import Carousel from '@com/Carousel';
    import Keepalive from '@com/Keepalive';
    export default {
        data:function(){
            return {
                username:'lemon'
            }
        },
        components:{
            TodoList,
            Carousel,
            Keepalive
        }
    }
</script>
<style>
    /*
        css部分
    */
</style>