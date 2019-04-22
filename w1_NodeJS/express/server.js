/**
 * 中间件
 * 要执行下一个中间件，必须调用next方法
 * 利用模块化开发思想实现路由
 */
const express = require('express');

const app = express();

const routers = require('./routers');

// 自定义中间件：格式
// app.use(function(req,res,next){
//     console.log(66666)

//     next();//进入下一个中间件,如无next则忽略下面所有中间件
// })

// app.get('/list',(req,res)=>{
//     res.send('商品列表')

// })

// app.get('/goods',(req,res)=>{
//     res.send('商品详情')
// })
// app.put('/goods',(req,res)=>{
//     res.send('修改商品成功')
// })
// app.delete('/goods',(req,res)=>{
//     res.send('删除商品成功')
// })

// app.get('/cart',(req,res)=>{
//     res.send('购物车')
// })

// app.post('/login',(req,res)=>{
//     res.send('登录')
// });



// 内置中间件：利用中间件实现静态资源服务器
app.use(express.static('./'));

// 全站路由
app.use(routers);


let PORT = 19011;
app.listen(PORT,()=>{
    console.log('server is running on port %s',PORT);
});