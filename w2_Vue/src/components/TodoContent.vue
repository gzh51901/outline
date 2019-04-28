<template>
    <div class="todo-content">
        <h1>TodoContent</h1>
        <!-- webpack把<TodoItem/> 编译成 <todo-item/> -->
        <TodoItem/> 
    </div>
</template>
<script>
import TodoItem from './TodoItem.vue';
export default {
    components:{
        TodoItem
    }
}
</script>
