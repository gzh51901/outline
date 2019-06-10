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

    
    Foo.getName();  //object : typeof与静态方法
    getName();      // 1234  : 声明提前，&&短路用法，细心
    Foo().getName();// '11'  : 细心，this指向
    getName();      // '11'  : 同上
    new Foo.getName(); //object: 运算符优先级
    new Foo().getName();//false: 原型对象，优先级
    new new Foo().getName();//false: =>对象

```

### 知识点
* offset的计算

    size:10
    pageNo          offset
    1               0
    2               10
    3               20
    ...

    推导公式：offset = (pageNo-1)*size


## day8-4

* 隐式转换
> js内部的隐式转换过程：如果当前数据有valueOf()方法，则调用valueOf()的返回值作为隐式转换的值，否则调用toString()方法的返回值作为隐式转换的值
```js
    true+1;//2  true隐式转换成1
```

f(1) = 1
f(1)(2) = 2
f(1)(2)(3) = 6
f(1)(2)(3)(4) = 24;

函数柯里化

function f(a){
    // a:6
    const temp = function(b){
        // 4
        return f(b*a)
    }

    // 修改toString方法让其按照我们的意愿进行隐式转换
    temp.toString = function(){
        return a;
    }

    return temp
}

let f = a=>Object.assign(b=>f(b*a),{toString:()=>a})



-------------------------------

f(1)
f(2)(1)
f(3)(2)(1);

function f(a){
    if(a<=1) return 1;
    return a*f(a-1)
}

## 小程序开发框架
* mpvue(mini program in vue)     美团
    * 利用Vue开发小程序
* wepy                           腾讯
    * 类似Vue的开发模式

原理：
    .vue  -> wxml,wxss,js


{{arr.sort().slice()}}
computed

* 假期练习
    * 开发一个小程序
    * 注册一个公众号


## day9-1
* 微信开发（微信公众平台）
    * 小程序
    * 公众号
        * 与普通web开发一致
        * 调用jssdk(一个js文件)
            > http://res.wx.qq.com/open/js/jweixin-1.4.0.js
        * 开发测试账号：https://mp.weixin.qq.com/debug/cgi-bin/sandboxinfo?action=showinfo&t=sandbox/index

* canvas    画布
    * <canvas width="500" height="200" id="myCanvas"></canvas>
        * myCanvas.width = 300;
    * 通过js调用内部接口（js）
    * 注意事项
        * 不能使用css设置宽高
        * 位图（放大会失真） VS 矢量图（随意放大） 
            * 扁平化设计
            * 双倍图
            

    * 用途
        * 游戏：
            * flash + as(ActionScript)
            * canvas + js(javascript)
        * 数据可视化
            * echarts    canvas
            * hichart    svg
        * 广告