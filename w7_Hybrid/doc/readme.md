# hybrid

## day7-2
* 系统（平台）
    * windows
    * unix
        * linux
            * android
                * 定制
        * iOS
    * 微信
        * 微信公众号
        * 小程序
* app类型
    * webApp
        * 跨平台
        * 缺点
            * 调用硬件设备
    * nativeApp
    * HybridApp
        * Native主导
        * h5主导

* Native如何与js进行交互
    * 原理：通过全局（window对象）方式来实现数据交互


* m站
* moxiu
    * moxiu.exit()
* 静默登录

```js
    window.onload = ()=>{}
    document.addEventListener('DOMContentLoaded',()=>{

    })
    document.onreadystatechange = ()=>{
        if(document.readyState === 'interactive'){
            
        }
    }

```
