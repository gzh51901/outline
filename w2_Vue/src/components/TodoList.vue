<template>
    <div class="todolist container-fluid py-3">
        <TodoForm :handleradd="add"></TodoForm>
        <TodoContent :datalist="datalist" :handlerremove="remove"></TodoContent>
    </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css';
import TodoForm from './TodoForm.vue';
import TodoContent from './TodoContent.vue';

import bus from '../bus';
export default {
    data(){
        return {
            datalist:[{
                event: '观看《妇联4》',
                time: '2019-4-24 00:00:00',
                done:false,
                selected:false
            }]
        }
    },
    components:{
        TodoForm,
        TodoContent
    },
    methods: {
        // 增：添加
        add(keyword) {
            this.datalist.push({ 
                event:keyword, 
                done:false,
                selected:false,
                time: this.formatDate(new Date(),'YYYY/MM/DD')
            })

        },

        // 删：删除
        remove(idx) {
            this.datalist.splice(idx, 1)
        },

        // 改：完成
        complete(item){
            item.done = true;
            // e.stopPropagation();
        },

        

        // 格式化
        formatDate(date=new Date(),fmt='YYYY-MM-DD') {
            // 预订字符对应时间
            var o = {
                "M+": date.getMonth() + 1, //月份 
                "D+": date.getDate(), //日 
                "h+": date.getHours(), //小时 
                "m+": date.getMinutes(), //分 
                "s+": date.getSeconds(), //秒 
                "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
                "S": date.getMilliseconds() //毫秒 
            };

            // 匹配年份
            // 年份比较特殊，所以单独处理
            // test方法如果返回true，RegExp.$1得到匹配的字符
            if (/(Y+)/.test(fmt)) {
                // 得到fmt字符串中Y字符对应的时间
                // YYYY => 2017
                // YY => 17
                var res = String(date.getFullYear()).substr(4 - RegExp.$1.length);

                // 替换年份
                fmt = fmt.replace(RegExp.$1, res);
            }

            for (var str in o) {
                // 创建正则时设定分组，以便获取匹配到的字符
                // RegExp.$1
                var reg = new RegExp('(' + str + ')');

                // 如果有匹配则把fmt中匹配到的字符替换成o中对应的时间，根据fmt中的字符决定是否补0
                // YYYYDDMM => 20170813
                // YYYY-DD-MM hh:mm:ss => 2017-08-13 20:12:30
                if (reg.test(fmt)) {
                    // 得到匹配字符对应的时间
                    var res = RegExp.$1.length > 1 ? ('00' + o[str]).substr(String(o[str]).length) : o[str];
                    fmt = fmt.replace(RegExp.$1, res);
                }
            }

            return fmt;
        }
    },
    mounted(){
        // 给当前组件实例绑定事件
        bus.$on('add',this.add);
        bus.$on('remove',this.remove);
        bus.$on('complete',this.complete);
    }

}
</script>

