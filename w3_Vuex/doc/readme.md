##day3-7
* beforeCreate
    reactivity：响应式(响应式属性：getter&setter)
* created
* beforeMount
* mounted
* beforeUpdate
* updated
* beforeDestroy
* destroyed
* activated（keep-alive）
* deactivated（keep-alive）


* Vue阻止冒泡：v-on:click.stop="handler"
    * 把事件绑定在document

    e.stopPropagation()

    v-for="item in xxx"
        <button @click="handler"/>

### 复习
* VueRouter（实例化并注入Vue的根实例）
    * hash & history
    * routes
        * path
        * component
    * 内置组件
        * <router-view/>
        * <router-link/>
    * 编程式导航
        * $route  获取当前路由信息
        * $router 获取router实例
    * 路由组件通讯
        * params
            * 动态路由(刷新页面数据依然存在)
        * query
        * props
* Vuex（状态管理工具：独立于Vue实例的一个数据存储空间）
    * 使用步骤
        1. 引入vuex
        2. 使用vuex
        3. 创建store
        4. 把store注入根实例
        5. 在组件中使用store：this.$store
    * 核心概念
        * store
            * state （状态：数据，类似于组件中的data）
            * getters（类似于组件中的computed）
                * Fn(state)
            * mutations（修改state的方法，类似于组件中的methods）
                * 定义：Fn(state,payload)
                    * state:上面的state
                    * payload：触发Fn时传入的参数
                * 调用：store.commit('Fn',xxxx)
            * actions（用于触发mutations）
                * 同步：mutations->state
                * 异步操作 actions->mutations->state

            * 方法
                * commit('mutation',arg)
                * dispatch('action',arg)

## Router组件通讯
<Home username="laoxie" age="18" />
<Goods v-bind="{username:'laoxie',password:123456}"> -> <Goods username="laoxie" password="123456">


###jquery优化
```js
    $box = $('.box')
    $box.css('color',"#f00").html('laoxie').css('color') //#f00
    $box.attr('title','xxx')
```

###Vue的缺点
* React比Vue性能好，
    * Vue: getter&setter  Object.defineProperty(target,attr,options)

* 不兼容IE8-
* 大量响应式属性（getter&setter）

```js
var password = 'abc'
var obj = {
    username:'laoxie',
    password,
    [password]:123 //=>abc:123
}

obj.age = 18
obj['age'] = 18
```

* 响应式属性
    * 如果把属性设置成响应式属性
        * 实例化时把属性写到data

* 路由拦截