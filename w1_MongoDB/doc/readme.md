## day2-1

### 跨域解决方案
* 什么叫跨域
    * 协议
    * 域名/主机
    * 端口
* 为什么有跨域
    * js是一门客户端语言
* 跨域解决方案
    * 服务器是自己的
        * jsonp
            ```js
                //当前服务器：http://localhost:1901
                // 产生跨域
                let xhr = new XMLHttpRequest()
                xhr.open('get','http://localhost:19011/jsonp',true);
                xhr.send()
            ```
        * CORS跨域资源共享
    * 服务器是别人的
        * 有接口：代理
        ```js
            //利用服务器无跨域限制的原理，在自己的服务器中自定义一个接口，并在服务器发起请求
            // http://localhost:1901/getjiuxiandata  -> http://www.jiuxian.com/act/selectPricebypids.htm
            let xhr2 = new XMLHttpRequest();
            xhr2.open('get','http://localhost:1901/getjiuxiandata',true);
            xhr2.send();
        ```
        * 无接口：爬
            * request
    
## WebSocket
* http/https
    * 无状态
    * 被动性响应
    * 跨域限制
    * 短连接


* websocket:ws
    * 长连接
    * 主动性
    * 无跨域


### 客户端socket

### 服务端socket

