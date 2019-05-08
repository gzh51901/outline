<template>
  <div>
    <el-carousel class="lbt">
      <el-carousel-item v-for="item in recommed" :key="item.proId">
        <div class="lbt-item">
          <img :src="item.proImg">
          <h4>{{item.proName}}</h4>
        </div>
      </el-carousel-item>
    </el-carousel>
    <!-- 商品列表 -->
    <el-row :gutter="20">
      <el-col :span="6" v-for="goods in goodslist" :key="goods.proId" style="height:300px" @click.native="goto(goods)">
        <el-image style="width: 100px; height: 100px" :src="goods.proImg" fit="fit"></el-image>
        <h4>{{goods.proName}}</h4>
        <p class="price"><del>{{goods.proPrice.toFixed(2)}}</del><span>{{(goods.proPrice*(1-goods.sellPercent/100)).toFixed(2)}}</span></p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  // props:['username'],
  data() {
    return {
      recommed: [],
      goodslist: []
    };
  },
  methods:{
    goto(goods){
      let id = goods.proId;
      this.$router.push({name:'Goods',params:{id,className:'1901',qty:48}})
      // this.$router.push({path:'/goods/'+id,query:{id}})

      // 本地存储
      sessionStorage.setItem('goods',JSON.stringify(goods));
    }
  },
  created() {
    console.log('this',this)
    // 发起ajax请求，返回promise对象
    this.$axios
      .get("https://m.jiuxian.com/m_v1/promote/qgajax.do", {
        params: {
          t: 1556593492897,
          pagenum: 1,
          tabnum: 1
        }
      })
      .then(({ data: { killProList } }) => {
        console.log(killProList);
        this.goodslist = killProList;

        // 排序并获取totalNubs值前5商品
        this.recommed = killProList
          .sort((a, b) => {
            return b.totalNubs - a.totalNubs;
          })
          .slice(0, 5);
      });
  }
};
</script>

<style lang="scss" scoped>
// 局部样式scoped
.lbt {
  img {
    width: 100%;
    height: 280px;
  }
  .lbt-item {
    position: relative;
  }
  h4 {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 3px 10px;
    height: 50px;
    line-height: 50px;
    color: #fff;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    font-weight: normal;
    font-size: 14px;
  }
}
</style>

