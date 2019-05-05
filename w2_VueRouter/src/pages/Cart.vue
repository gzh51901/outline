<template>
    <div class="cart-list">
        <el-row :gutter="20" v-for="goods in goodslist" :key="goods.proId">
            <el-col :span="2"><el-checkbox></el-checkbox></el-col>
            <el-col :span="6"><img :src="goods.proImg"/></el-col>
            <el-col :span="12">
                <h4>{{goods.proName}}</h4>
                <p class="price"><span>{{goods.proPrice}}</span></p>
                <el-input-number :value="goods.qty" @change="changeQty($event,goods.proId)" :min="1" :max="5" label="数量" size="mini"></el-input-number>
            </el-col>
            <el-col :span="2">
                <el-button type="danger" icon="el-icon-delete" circle size="mini" @click="remove(goods.proId)"></el-button>
            </el-col>
        </el-row>
        <div>总价：{{totalPrice}}</div>
    </div>
</template>
<script>
export default {
    name:'Cart',
    data(){
        return {

        }
    },
    computed:{
        goodslist(){
            // state有修改，自动更新goodslist -> view更新
            return this.$store.state.goodslist
        },
        totalPrice(){
            return this.$store.state.goodslist.reduce((prev,item)=>prev+item.proPrice*item.qty,0)
        }
    },
    methods:{
        changeQty(qty,proId){
            this.$store.commit('changeQty',{proId,qty})
        },
        remove(proId){
            this.$store.commit('removeFromCart',{proId})
        }
    },
    mounted(){
        console.log(this.$store.state)
    },
    destroyed(){
        console.log('Cart:destroyed')
    },

    // keep-alive
    activated(){
        console.log('activated')
    },
    deactivated(){
        console.log('deactivated')
    }
}
</script>
<style lang="scss" scoped>
    .cart-list{
        img{width:80px;}
        h4{margin:0;}
        p{margin:0}
        .el-row{
            border-bottom:1px dotted #ccc;padding-bottom:10px;
            .el-col{
                position: relative;min-height:80px;
                .el-checkbox,.el-button--danger{position:absolute;top:50%;left:50%;transform: translate(-50%,-50%)}
                
            }
        }
    }
</style>
