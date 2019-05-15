/**
    * 组件
        * 函数组件
            * 必须有返回值
        * 类组件
            * 
    * 组件传参
        * 父->子：
 */

 import React from 'react';

 import Home from './pages/Home';

 function App(){
    return <div className="myapp">
        <Home username="laoxie"/>
    </div>
 }

 export default App;