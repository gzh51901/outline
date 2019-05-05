<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="12">
          <img src="/img/logo.svg">
        </el-col>
        <el-col :span="12">
          <el-input placeholder="请输入内容" v-model="keyword" class="input-with-select mysearch">
            <el-button slot="append" type="success" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu class="el-menu-vertical-demo" router>
          <el-menu-item :index="item.path" v-for="item in pages" :key="item.name">
            <i :class="item.icon"></i>
            <span slot="title">{{item.text}}</span>
            <el-badge :value="cartLen" class="mark" :hidden="item.name!=='Cart'"/>
          </el-menu-item>
        </el-menu>
      </el-aside>
        <el-main>
          <!-- 显示组建内容 -->
          <keep-alive>
            <router-view/>
          </keep-alive>
        </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import './sass/common.scss';
Vue.use(ElementUI);

export default {
  data: function() {
    return {
      keyword: "",
      pages: [
        {
          name: "Home",
          path: "/home",
          icon: "el-icon-s-home",
          text: "首页"
        },
        {
          name: "List",
          path: "/list",
          icon: "el-icon-s-unfold",
          text: "列表"
        },
        {
          name: "Goods",
          path: "/goods",
          icon: "el-icon-s-goods",
          text: "商品"
        },
        {
          name: "Cart",
          path: "/cart",
          icon: "el-icon-shopping-cart-full",
          text: "购物车"
        }
      ]
    };
  },
  computed:{
      cartLen(){
          return this.$store.state.goodslist.length
      }
  }
};
</script>
<style scoped>
.active {
  color: #f00;
  font-weight: bold;
}
.mysearch button.el-button--success{
    color: #FFF;
    background-color: #67C23A;
    border-color: #67C23A;
    border-top-left-radius: 0;
    border-bottom-left-radius:0 
}
.mark{position:absolute;top:0;right:30px;}
</style>