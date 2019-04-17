const express = require('express');
const Router = express.Router();


// 获取商品信息
Router.get('/',function(req,res){
    res.send('获取商品信息');
})

Router.post('/',function(req,res){
    res.send('添加商品信息');
})

Router.delete('/',function(req,res){
    res.send('删除商品信息');
})

Router.put('/',function(req,res){
    res.send('修改商品信息');
})

module.exports = Router;