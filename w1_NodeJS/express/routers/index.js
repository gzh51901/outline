const express = require('express');
const Router = express.Router();

const goodsRouter = require('./goods');
const cartRouter = require('./cart');
const listRouter = require('./list');
const kuayuRouter = require('./kuayu');

let allowList = ['http://localhost:1901','http://localhost:1902','http://www.baidu.com'];


// 格式化传入的参数
// req.query
// Router.use(bodyParser.json(),bodyParser.urlencoded({ extended: false }));
Router.use(express.json(),express.urlencoded({ extended: false }));

// 所有请求都运行跨域
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

//     // 跨域请求CORS中的预请求
//     if(req.method=="OPTIONS") {
//         res.sendStatus(200);/*让options请求快速返回*/
//     } else{
//         next();
//     }
// });

// 配置路由信息
// 商品
Router.use('/goods',goodsRouter);
Router.use('/cart',cartRouter);
Router.use('/list',listRouter);
Router.use('/kuayu',(req,res,next)=>{
    let idx = allowList.indexOf(req.headers.origin)
    if(idx>=0){
        // 利用js的特性
        res.header("Access-Control-Allow-Origin", allowList[idx]);
        res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    
        // 跨域请求CORS中的预请求
        if(req.method=="OPTIONS") {
            res.sendStatus(200);/*让options请求快速返回*/
        } else{
            next();
        }
    }else{
        next()
    }
},kuayuRouter);

module.exports = Router;
