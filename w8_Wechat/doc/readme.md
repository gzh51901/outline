# Weixin开发

## day8-1

### 面试题
* Promise对象的理解
    * jquery:
    ```js
        jQuery.ajax({
            url,
            type,
            data
        }).then()


        console.log(res)


    ```
    * prop 与 attr的区别
        * 节点与html元素

    ```js
        /**
         * 标准属性
            * 全局属性：id,class,title style, contenteditable....
            * 私有属性：
                * input: type,value,name
                * label: for
                * img: src,alt
                * ...

        html属性 vs 节点属性
            * 标准属性：相互影响
        */
        // 给html元素添加属性（html属性）
        <input type="button" value="发送"/>

        // 给节点设置属性（节点属性）
        btn.id = 'btnSend'
    ```
    


### 知识点
* 微信开发
    * 公众号
    * 小程序

    * qq商城
    * 百度有啊

* 微信文件类型
    * json配置文件
    * wxml布局文件
    ```xml
        <view>{{message}}</view>

        <view wx:for="{{array}}" wx:for-item="it" wx:for-index="idx">{{item}} - {{index}}</view>
    ```

## day 8-2

### 复习
* 小程序
    * 文件类型
        * json  配置
        * js    逻辑
        * wxss  样式
        * wxml  布局/模板
        * wxs   模块化
        ```
            <wxs module="xxx">
                var a = 100

                module.exports = {
                    a
                }
            </wxs>
            <wxs>
                let {a} = require('./')
                var a = 200
            </wxs>

            <view>{{xxx.a}}</view>
            let username = 'xxxx'
            let person = {username:username}
            {{person}}

            {{{username}}}
        ```

        ```js

            if(xx) 
            username='xxxx'
            
            let i = 0,j=0

            for(;i<5,j<10;)
                i++

        ```

### 面试题
* 如何实现原型链继承
    * 属性访问规则

    ```js
        Object.prototype

        Person.prototype.getData = ()=>{}

        Student.prototype = new Person();

        let obj = new Student();

        obj.getData();


        // 以obj作为原型对象常见一个对象
        Object.create(obj)
    ```


## day8-3

### 面试题

* 什么叫纯函数（不会产生副作用）
    * 函数式编程
    * 模块化/组件化
* 如何快速找到一个数组中的最大值
    arr = [10,6,12,3,6,31,21]
    * Math.max()
    Math.max.apply(null,arr)

    Array.prototype.forEach.call(btns,function(item){})
    btns.forEach()

* 经典面试题
```js
    function Foo(){
        getName = function(){alert(1+'1')}
        return this;
    }

    Foo.getName = function(){alert(typeof null)}
    Foo.prototype.getName = function(){alert(NaN===NaN)}
    var getName = function(){alert(parseInt('1234S'))}
    function getName(){alert(4&&5)}

    
    Foo.getName();
    getName();
    Foo().getName();
    getName();
    new Foo.getName();
    new Foo().getName();
    new new Foo().getName();

```
    