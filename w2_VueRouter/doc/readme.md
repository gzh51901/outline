## 3-1
## 面试题
* bind，call，apply的共同点与区别
    * fn.bind 仅仅改变fn的this指向
    * fn.call fn.apply 改变fn的this指向，并执行fn
    ```js
        obj.toString() //this
        Object.prototype.toString.call(arr)

        function type(data){
            return Object.prototype.toString.call(data).slice(8,-1).toLowerCase()
        }
    ```

* webpack的工作原理
    * entry
    * output
    * loader
    * plugin
* html5新特性
    * 新标签:header footer nav main aside section...
    * 表单新类型：input type -> datapicker(date,time),color,
    * Canvas,Video,Audio
    * web Storage
        * sessionStorage
        * localStorage
    * webSocket
    * formData
    * draggable
    * Geolocation
    * Web Worker
        * 多线程


## VueRouter
* 组件Component
* SPA(Single Page Application)
    * 一个应用（web,app）只有一个页面
* 配置
    * mode:hash|history
    * routes
        * name
        * path
        * component
        * children
        * redirect
* 导航
    * 声明式导航：<router-link/>
    * 编程式导航：利用js代码实现导航


## day3-2
Vue是一个渐进式框架（Vue全家桶）
* VueRouter
    * 使用步骤（模块化开发/单文件组件）
        1. 引入 import
        2. 安装（使用） Vue.use()
        3. 实例化（配置参数） new VueRouter(options)
        4. 注入Vue实例 
    * 配置参数
        * mode: hash,history
        * routes:[{},{}]
            * name
            * path
            * component
            * components
            * redirect
            * children [{}]
                * path 'home'


    * 路由渲染
        * <router-view/>
            * name
    * 导航
        * 声明式导航：<router-link>
            * to (path|Object)
                to={name:'Home'} -> to="/home"
                <router-link :to="{name:'Home'}" replace>
        * 编程式导航
            ```js
                this.$router //路由实例,一般用于路由跳转
                
                this.$route //当前路由，一般用户获取当前路由的信息
            ```


* 路由
>根据url地址渲染相应的组件


* ajax请求第三方工具
    * axios
    * fetch

* git/svn
    * 团队开发
    * 分支
        * master
        * dev
        * laoxie
        * xiaoxie
        * lemon
        * tiantian
* gulp与webpack工作原理
* 上线流程
    * 开发阶段
        * 自测
        * 单元测试
    * 测试阶段
        * 本地测试
            * 假数据
        * UAT（用户测试环境）
            * 真实数据
    * 上线阶段
        * 发布到服务器

    估算时间：2day*2

    FE front-end
    BE back-end

* 局部样式的原理
    * scoped： webpack会给当前组件所有html元素加上一个data-v-[hash]
    * 属性选择器：然后通过属性选择器达到局部样式的效果

* vuex
    * 使用步骤
    * 核心概念
        * store 存储仓库
            * state 状态（数据）                    类似于组件中的data
            * getters（用于过滤state）              类似与组件中的computed(getter&setter)
            * mutations（修改state的方法）          理解为组件中的methods
            * actions（用来操作mutations）          类似mutations