<template>
    <div class="todolist container-fluid py-3">
        <TodoForm></TodoForm>
        <TodoContent></TodoContent>
    </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css';
import TodoForm from './TodoForm.vue';
import TodoContent from './TodoContent.vue';
export default {
    components:{
        TodoForm,
        TodoContent
    }
}
</script>
