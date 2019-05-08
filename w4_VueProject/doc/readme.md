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


## day4-2

* Vue-CLI
    1. vue create
    2. vue build
    3. 部署上线

    * 安装插件
        * npm i router      安装
        * vue add router    安装&配置

* webpack
    * 是否需要webpack处理
        * 否：绝对路径 <img src="/img/xxx.jpg"> index.html -> /fe/img/xxx.jpg
        * 是：
            * 相对路径
            * import
            * require  require('./img/xxx.jpg')

* SPA & MPA
    * 移动端：SPA

* 版本
    * production    生产环境
    * development   开发环境

### 面试题
* npm常用命令
    * npm init
    * npm install
    * npm run

* token : 
    * 静默登录：自动更新token

## day4-3

### 面试题

* el,template,render
* 监听不进入生命周期的组件切换
    * watch
    * 路由守卫

### 知识点回顾
* 加密解密
* 安全问题

### 知识点
* Vuex
    * 使用步骤
        * 生成store
        * 注入store
    * store
        * state
            token
        * getters       computed(getter,setter)
            fn(state)
        * mutations    methods
            fn(state,payload)
        * actions   用来触发mutaions
            fn(context,payload){
                this.$axios.get().then(res=>{

                    context.commit('fn',)
                })
            }
                
        * 方法
            * commit('mutaions')
            * dispatch('action')

    * 修改state
        * 触发mutations：this.$store.commit('fn',{})

* Vuex模块化