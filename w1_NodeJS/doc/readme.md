#day1-1

谢进荣

老谢
laoxie


## 三阶段课程

* 第一周：NodeJS
    * 服务器
    * 路由
    * 模块
        * http/https
        * fs
        * path
    * 使用方式
        * 作为工具
        * 后端语言
* gulp
    * 基于Nodejs环境

* 第2~4周：Vue全家桶
    * Vue
    * Vue-router
    * Vuex
    * Vue-cli
    * axios
    * ...

* 第5-6周：
    * React
    * React-router
    * Redux
    * webpack

* 第7周：混合开发
    * DCloud
    * ReactNative
* 第8周
    * 微信开发
        * 微信小程序
        * 微信公众号
* 第9周：就业周
    * 面试题
    * 模拟面试
    * ...
* 第10周：出去面试

## h5:HTML+CSS+JS


## 如何学习：

* 一阶段：入门
    * HTML
    * CSS
    * 成果：静态页面
* 二阶段：打基础
    * JS
    * jQuery
    * 项目相关
        * git/svn
        * gulp
        * sass
    * 后端
        * php
        * mySQL
    * 成果：前后端分离的项目
* 三阶段：项目实战
    * 框架
    * 高大上的写法和骚操作
        * ES6

* 做笔记
    * 手写
    * 网络笔记
        * 印象笔记
        * 有道云笔记
* 整理
    * 思维导图（脑图）：xmind
        * 目的记忆

## 要求：
    * 查文档（30s法则）
        * 技术文档
            * 官网
            * 百度/google
        * 需求文档（产品经理）
    * 多写代码
        * 日入500行（根据编写习惯）

    * 视频
        * 最后保障

## markdown：一个比HTML还简单的表示语言（5分钟上手）
    * h1~h6
        * #
        * ##
        * ...
        * ######
    * ul>li
        *
    * ol>li
        1. 

    ```
        //代码
    ```

    * >

## 公钥与私钥
* 私钥要自己保存
* 公钥可以公开

## 模块化开发

* 什么是模块化
> 把一个庞大的东西分成若干小块，并进行组合

* 模块化开发的好处
    * 分工更简单
    * 开发更简单
    * 维护更容易
    ....

* NodeJS如何实现模块
    * 引入
        * require()
    * 导出（暴露）
        * module.exports
        * exports
    * 模块化分类
        * 内置模块
        * 文件模块
        * 自定义模块
        * 第三方模块
* 模块化开发规范
    * commonJS：nodejs
    * AMD：require.js
    * CMD：sea.js
    * ES Module
        * javascript这门语言的模块化开发
        * 引入：import
        * 导出：export
* 面试题：
    * commonJS、AMD、CMD有什么区别


   require(['jquery'],function($){

   })

007
996.ICU
40h
ant-996
Vue
创业公司：大小周


## 第三方模块

### 使用步骤
1. 安装 `npm install xxx --save-dev`
2. 引入 `const xxx = require('xxx')`
3. 使用模块


## 跨域
* 为什么前端会有跨域限制
    * 安全因素
        * js为客户端语言
* 解决方案
    * jsonp
    * CORS（跨域资源共享Cross-Origin-Resource-Sharing）
    * 服务器代理
        


# day1-2

## 面试题

* webStorage(sessionStorage & localStorage) + cookie
    * getItem()
    * setItem()
    * cookie
        * expires
        * path
* 模块化开发
    * AMD           require.js
    * CMD           sea.js
    * commonJS      node.js
    * ES Module     es6
    

## 复习
* 技能
    * 写PPT
    * 发邮件
        * 发送
        * 抄送
        * 邮件格式
    * 思维导图
    * 甘特图
* 回顾
    * 复习二阶段的知识
        * http
        * url
        * path
        * querystring
        * fs
    * 模块化开发
        * 分类
            * 原生模块
            * 文件模块
            * 自定义模块
                * module.exports
                * exports
                * require()
            * 第三方模块
        * 常用第三方模块
            * request
                * 服务器代理
                * 爬虫
            * cheerio
            * express

* ajax请求
    * let xhr = new XMLHttpRequest()
    * xhr.onload = ()=>{}
    * xhr.open('get',xxx?xx=xx,true);
    * xhr.send()

    xhr.abort()


## Stream文件流
>文件在内存中的状态（液体）
* gulp.src('../xx/xx.js') 返回文件流
    .pipe()



## day1-3

### 面试题
* 链式调用的原理:return this
```js
    $('.box').css('color','#58bc58').attr('data-idx',10).html('要让生活过得去，头上哪能没点绿');
    $('.box').css('color')
```
* get和post的区别
* async & await  （ES7，ECMAScript2016)（ES6，ECMAScript2015）
* 原型链的理解
    * 什么是原型链：从当前对象到Object.prototype间的链条
    * js一切皆对象
    * 属性的访问规则
* 如何git冲突
    * code review

* 错误提示信息
    * can not set the property xx of undefined (a.xx)


### 知识点
* 请求类型：get（查）,post(增),put/patch（改）,delete（删）,options(预请求)
* 路由：访问不同的地址相应不同的信息
    * 静态资源
    * 数据接口
* 模块化commonjs
    * exports/module.exports
    * require()


* ajax请求

* promise & async & await(ES7,ECMAScript2016)

    async function show(){
        return 666
    }

    await:等待一个promise对象的返回值
    await必须写在async函数中
    function(){
        let res = await show()
        console.log(res)
    }
    

## day1-4
### 面试题:
* canvas的应用场景
    * 游戏
    * 数据可视化
        * echarts
        * hicharts
* html5新标签
    * 有语义的标签
    * 会DIV+CSS布局(low) -> 对语义化有一定的理解

### 复习
* express
    * 创建服务器: const app = express()
    * 监听端口:app.listen(1901,()=>{})
    * 静态资源服务:app.use(express.static())
    * 路由(数据接口)
        * app.use(express.static())
        * app.use(routers)

* 中间件: function(req,res,next){}
    * 使用中间:`app.use([path],...mw)`


*  Restful api
    * get       /goods        获取所有商品信息
    * post      /goods        添加商品
    * get       /goods/:id    获取某个商品信息
    * put       /goods/:id    修改某个商品信息
    * delete    /goods/:id    删除某个商品信息

* 数据库类型
    * 关系型数据库      Oracle(甲骨文)  MySQL(MariaDB) SQLServer(微软)
    * 非关系型数据库    MongoDB

            关系型数据库                非关系型数据库
数据库       database                   database
表/集合      table                      collection
数据         row                        document


## day1-5
* mySQL的封装与测试（postman）
* Restful api规范
    * url
    * 请求类型
        * 增：post
        * 删：delete
        * 改：put/patch
        * 查：get
        * 预请求：options
* Postman的使用
* 环境变量
* MongoDB
    * 安装

### 在nodejs中操作MongoDB
* mongodb