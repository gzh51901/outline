// 引入express
const express = require('express');

// 引入配置文件
const {PORT} = require('./config.json');

// 基于express创建应用
const app = express();

// 创建静态资源服务器
// 中间件middleware
app.use(express.static('./'));

app.listen(PORT,()=>{
    console.log('服务器启动成功');
})
