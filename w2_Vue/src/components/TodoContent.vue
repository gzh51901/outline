<template>
    <div class="todo-content">
        <table class="table table-sm" ref="table">
            <thead>
                <tr>
                    <th scope="col" width="100"><label><input type="checkbox" v-model="checkAll"
                                value='100'>全选{{checkAll}}</label></th>
                    <th scope="col" width="100">#</th>
                    <th scope="col">事项</th>
                    <th scope="col">时间</th>
                    <th scope="col" width="150">操作</th>
                </tr>
            </thead>
            <tbody>
                <!-- webpack把<TodoItem/> 编译成 <todo-item/> -->
                <TodoItem v-for="(item,idx) in datalist" :key="idx" :data="{item,idx}"/>
            </tbody>
        </table>
    </div>
</template>
<script>
import TodoItem from './TodoItem.vue';
export default {
    props:{
        datalist:{
            type:Array,
            required:true
        }
    },
    computed:{
        checkAll:{
            get(){
                return this.datalist.every(item=>item.selected);
            },
            set(val){
                this.datalist.forEach(item=>item.selected=val)
            }
        }
    },
    components:{
        TodoItem
    }
}
</script>
