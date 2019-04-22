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
        * 无接口：爬
    