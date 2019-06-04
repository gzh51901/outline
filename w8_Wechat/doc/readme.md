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