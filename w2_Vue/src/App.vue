<template>
    <div class="myapp">
       <TodoList></TodoList>
    </div>
</template>
<script>
    import TodoList from './components/TodoList.vue'
    export default {
        data:function(){
            return {
                username:'lemon'
            }
        },
        components:{
            TodoList
        }
    }
</script>
<style>
    /*
        css部分
    */
</style>