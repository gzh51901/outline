const express = require('express');
const Router = express.Router();

Router.get('/jsonp',(req,res)=>{
    // 读取数据库
    let data = {name:'lemon',age:36}
    
    let callbackName = req.query.callback
    // jsonp请求：后端必须返回js代码
    res.send(callbackName +'('+JSON.stringify(data)+')')
})

.get('/cors',(req,res)=>{
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    // res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    
    res.send('cors data')
})

module.exports = Router;