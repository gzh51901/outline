
import Vue from 'vue';
import App from './App.vue';

import router from './router';


new Vue({
    // 4.把router实例注入到vue实例中
    router,
    render(h){
        return h(App);
    }
}).$mount('#app');