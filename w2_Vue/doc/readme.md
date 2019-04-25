## day2-2

### 面试题
* 移动端页面转场动画：css3+touch
    * 手势：touch事件
        * touchstart
        * touchmove
        * touchend
    * 移动端click事件会有300ms左右延迟
        * 著名bug：点透（穿透）
* 项目管理系统
    * bug管理
* 如何避免js的堵塞
    script标签属性：async defer 
        scr type
    script  
    <body>
        ...html
    script
    </body>


### Vue
```js
    $('.box').html('laoxie')
    $('.box').html('lemon')
    $('.box').html('laoxie')
```
* 从今天开始，大家要改变DOM节点操作的思维模式，而是把关注点放在数据上

* 属性特性
    * 值属性
        * configurable
        * enumerable
        * writable
        * value
    * 存储器属性
        * configurable
        * enumerable
        * get
        * set

## day2-3

### 面试题
```js
    data = {a:{b:1,c:2},d:3,e:{f:5,g:[6,7,8]}} // => [1,2,3,5]
    getData(data);
    //递归
```
* 乱码的根源是什么
10w+
ASCII   ->  GB2312 -> GBK   ->  Unicode
互联网 -> utf-8（1~4）兼容ascii

00000011 00000011 00000011 00000011

11111111


* 数据驱动
    * 双向数据绑定的原理（v-mode的原理）
        * v-model
        ```js
            <input type="text" v-model="keyword"/>
            <input type="text" :value="keyword" @input="change"/>
            // 双数据绑定 = 单向数据绑定 + 事件
            // 事件：view -> model
            // 单向数据绑定：model -> view
            //     响应式属性：getter&setter
        ```
    * 单向数据绑定
        * v-bind:attr
        * {{}}
* 配置选项
    * el
    * data
    ```js
        let vm = new Vue({
            el, //连接视图层View
            data, //链接数据层Model
            computed,
            methods
        })

        // this.xxx === vm.xxx
    ```
* 架构模式
    * MVC：Model+View+Controller
    * MVP：Model+View+Presenter
    * MVVM: Model+View+ViewModel

* async & await
* ... 扩展运算符
    * [...arr]
    * {...obj}
    ```js
        function show (...args){
            // args -> [10,20,30,40]
        }
        show(10,20,30,40)

        function getData(a,b,c){

        }
        let arr = [10,20,30]
        getData(...arr);// -> getData(10,20,30)
    ```

## day2-4
* Vue的生命周期
    * 生命周期函数（钩子函数）
        * Create 数据处理阶段
            * beforeCreate
            * Created
        * Mount 挂载阶段
            * beforeMount
            * Mounted
        * Update 视图更新阶段
            * beforeUpdate
            * updated
        * Destroy 销毁阶段
            * beforeDestroy
            * destroyed
    * 每个生命周期函数适合做什么

* 自定义指令（html属性）
    * 全局
        Vue.directive(name,option)
        myFocus -> v-my-focus
    * 局部
        directives {name:option}
    * 使用：v-name

* 组件（html标签）
    * 全局组件
    * 局部组件
    * 单文件组件

* 组件通讯
    * 父->子
    * 子->父
* 数据流
    * 单向：父组件->子组件