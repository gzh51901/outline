const express = require('express');

const app = express();

const rootRouter = require('./routers');


// 内置中间件：利用中间件实现静态资源服务器
app.use(express.static('./'));

// 根路由
app.use(rootRouter);

const {PORT} = require('./config.json');
app.listen(PORT,()=>{
    console.log('server is running on port %s',PORT);
});