<template>
  <div>
    <ul class="nav nav-tabs">
      <li class="nav-item" v-for="(tab,idx) in tabs" :key="idx">
        <a
          class="nav-link"
          href="#"
          :class="{active:tab==currentTab}"
          @click="currentTab=tab"
        >{{tab}}</a>
      </li>
    </ul>
    <keep-alive :exclude="/-L/">
        <component :is="currentComponent"></component>
    </keep-alive>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";
import Vue from 'vue';
export default {
  data() {
    return {
      currentTab: "Laoxie",
      tabs: ["Laoxie", "Lemon", "Tiantian"]
    };
  },
  computed: {
    currentComponent() {
      return "tab-" + this.currentTab;
    }
  },

  created() {
    this.tabs.forEach(item => {
      Vue.component("tab-" + item, {
        data() {
          return {
            num: 1
          };
        },
        methods: {
          change() {
            this.num++;
          }
        },
        template: `<div class="p-3"><h4>${item}</h4><button @click="change">点击增加:{{num}}</button></div>`
      });
    });
  }
};
</script>
