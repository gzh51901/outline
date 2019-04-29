## 3-1
## 面试题
* bind，call，apply的共同点与区别
    * fn.bind 仅仅改变fn的this指向
    * fn.call fn.apply 改变fn的this指向，并执行fn
    ```js
        obj.toString() //this
        Object.prototype.toString.call(arr)

        function type(data){
            return Object.prototype.toString.call(data).slice(8,-1).toLowerCase()
        }
    ```

* webpack的工作原理
    * entry
    * output
    * loader
    * plugin