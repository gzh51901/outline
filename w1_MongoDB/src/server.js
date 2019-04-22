const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();

const rootRouter = require('./routers');


// 内置中间件：利用中间件实现静态资源服务器
app.use(express.static('./'));

// /jiuxian/act/selectPricebypids.htm -> http://www.jiuxian.com/jiuxian/act/selectPricebypids.htm
app.use('/jiuxian/*',proxy({
    target: 'http://www.jiuxian.com', // target host 
    changeOrigin: true,               // needed for virtual hosted sites 
    pathRewrite: {
        '^/jiuxian' : '/'     // 重写路径
    }
}))

// 根路由
app.use(rootRouter);

const {PORT} = require('./config.json');
app.listen(PORT,()=>{
    console.log('server is running on port %s',PORT);
});