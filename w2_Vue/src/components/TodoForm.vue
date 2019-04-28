<template>
    <div class="input-group">
        <input type="text" v-model="keyword" ref="keyword" class="form-control" @keyup.13="add">
        <div class="input-group-append">
            <button class="btn btn-success" @click="add">添加</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            keyword:''
        }
    },
    methods:{
        add(){
            
        }
    }
}
</script>
