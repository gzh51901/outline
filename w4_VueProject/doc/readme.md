## day4-1

### 面试题

* 如何把一个属性变成响应式属性
    * data初始化
    * computed(getter&setter)
    * Vue.set(target,key,val)/ this.$set(target,key,val)
    * 数组方法：push(),unshift,pop(),shift(),splice(),reverse()
* src与href的区别
    * src：引入
    * href：引用

* Vue-cli

### 复习
* Vue响应式属性
* 路由传参
    * 监听动态路由的改变： /goods/:id
        * watch/$watch
        * beforeRouteUpdate(to,from,next)
* 路由守卫
    * 全局守卫
    * 路由独享守卫
    * 组件内的守卫


### 面试题
* restful API
    * get /api/goods/xxx
    * put /api/goods/xxx
    * delete /api/goods/xxx
    * post /api/goods

    * get /api/list/phone
    * get /api/list/phone/apple
    * get /api/list/phone/huawei
* setInterval(fn,16) -> 丢/掉帧
    * 


### 知识点
* 跨域请求
    * OPTIONS 预请求