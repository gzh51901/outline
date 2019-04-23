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