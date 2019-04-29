<template>
  <div class>
    <el-carousel class="lbt" style="background-color:#58bc58" type="card">
      <el-carousel-item v-for="item in imgs" :key="item">
        <img :src="item"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
    data(){
        return {
            imgs:['img/laoxie.jpg','img/lemon.jpg','img/tiantian.jpg']
        }
    }
};
</script>
<style>
    .lbt img{width:100%;}
</style>

