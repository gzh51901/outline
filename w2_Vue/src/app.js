
// import Vue from '../node_modules/vue/dist/vue'
import Vue from 'vue';// webpack
import App from './App.vue';

new Vue({
    el:'#app',

    render(h){
        return h(App);
    },
    // template:`<App/>`,
    // components:{
    //     App
    // }
})