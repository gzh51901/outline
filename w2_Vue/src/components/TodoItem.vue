<template>
    <tr :class="{'table-dark':item.done,'table-success':item.selected}"
        @click="selecte(item)">
        <td><input type="checkbox" v-model="item.selected" :disabled="item.done"></td>
        <td>{{idx+1}}{{item.selected}}</td>
        <td>{{item.event}}</td>
        <td>{{item.time}}</td>
        <td>
            <div class="btn-group btn-group-sm">
                <button class="btn btn-outline-primary" @click.stop="complete(item)"
                    :disabled="item.done">完成</button>
                <button class="btn btn-outline-danger" @click.stop="remove(idx)" @focus="hidefocus">删除</button>
            </div>
        </td>
    </tr>
</template>
<script>
import bus from '../bus';//es module 单例模式（设计模式）

export default {
    props:{
        data:{
            type:Object,
            required:true
        }
    },
    computed:{
        item(){
            return this.data.item
        },
        idx(){
            return this.data.idx
        }
    },
    methods:{
        hidefocus(e){
            e.target.blur();
        },
        // 选择
        selecte(item){console.log(item)
            item.selected=!item.selected
        },
        complete(){
            bus.$emit('complete',this.item);
        },
        remove(){
            bus.$emit('remove',this.idx);
        }
    },
    mounted(){
        console.log('item:',this.$parent.$parent)
    }
}
</script>
