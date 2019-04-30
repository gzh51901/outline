<template>
    <div class="goods" v-if="goods">
        <img :src="goods.proImg"/>
        <h1>{{goods.proName}}</h1>
        <p class="price"><span>{{goods.proPrice.toFixed(2)}}</span><del>{{goods.jxPrice.toFixed(2)}}</del></p>
        <el-button type="danger" @click="add2cart">加入购物车</el-button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            goods:null
        }
    },
    mounted(){
        let {id} = this.$route.params;
        // 根据id请求商品信息
        this.$axios.get('https://m.jiuxian.com/m_v1/goods/detailPromo/'+id).then(({data})=>{
            console.log(data)
        });

        // 获取本地存储数据
        let goods = sessionStorage.getItem('goods');//null
        goods = goods ? JSON.parse(goods) : {};
        console.log(goods)

        this.goods = goods;
    },
    methods:{
        add2cart(){
            let {proId, proName, proPrice, proImg} = this.goods;
            // 判断商品是否已经添加到购物车：是->qty++, 否：qty=1
            let has = this.$store.state.goodslist.filter(goods=>goods.proId==proId)[0];
            if(has){
                this.$store.commit('changeQty',{proId,qty:has.qty+1})
            }else{
                this.$store.commit('add2cart',{
                    proId,
                    proName,
                    proPrice,
                    proImg,
                    qty:1
                })
            }
        }
    }
}
</script>
