/**
 * 获取请求参数
 * * 查询字符:req.query
 * * get请求参数：req.params
 */

const express = require('express');
const Router = express.Router();

// const mysql = require('mysql');

const db = require('../db');

// 创建连接对象
// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database : 'jiaoxue'
// });

//  // 连接数据库
//  connection.connect();

// 利用连接池实现
// 
// var pool  = mysql.createPool({
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     port: 3306,
//     database: 'jiaoxue',
//     multipleStatements: true
// });


// 获取商品信息
// /goods/abc
Router.get('/:id',async (req,res)=>{
   

    // 根据id查询商品信息
    let {id} = req.params;
    let sql = `select * from goods where id=${id}`;
    // pool.query(sql,(err, results, fields)=>{
    //     if(err){
    //         res.send('查询数据库错误');
    //     }

    //     console.log(results);

    //     res.send(results[0])
    // })

    // db.find(sql,(data)=>{
    //     res.send(data);
    // })

    // db.find(sql).then(data=>{
    //     res.send(data)
    // });

    try{
        let data = await db.find(sql);
        res.send(data);
    }catch(err){
        res.send(err);
    }
    

})

Router.post('/',function(req,res){
    console.log(req.params,req.query,req.body)
    res.send('添加商品信息');
})

Router.delete('/',function(req,res){
    res.send('删除商品信息');
})

Router.put('/',function(req,res){
    res.send('修改商品信息');
})

module.exports = Router;