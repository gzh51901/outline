/**
 * 获取请求参数
 * * 查询字符:req.query
 * * get请求参数：req.params
 */

const express = require('express');
const Router = express.Router();

// const mysql = require('mysql');

const db = require('../db');
const {formatData} = require('../utils');

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

// 添加商品
// /goods
Router.post('/',async (req,res)=>{
    let keys = ''
    let values = ''
    for(let key in req.body){
        keys += key + ',';
        values += '"' + req.body[key] + '",';
    }

    // 删除多余逗号
    keys = keys.slice(0,-1);
    values = values.slice(0,-1);

    let sql = `insert into goods(${keys}) values(${values})`;

    try{
        let data = await db.query(sql);
        data = formatData({
            data,
            msg:'数据插入成功'
        })
        res.send(data);
    }catch(err){
        let data = formatData({
            status:400,
            msg:err
        })
        res.send(data);
    }
})


// 获取商品信息
// /goods/abc
Router.route('/:id')

.get(async (req,res)=>{
   

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
        let data = await db.query(sql);
        res.send(formatData({
            data
        }));
    }catch(err){
        res.send(err);
    }
    

})

.delete(async (req,res)=>{
    let {id} = req.params;
    let sql = `delete from goods where id=${id}`;

    try{
        let data = await db.query(sql);
        res.send(formatData());
    }catch(err){
        res.send(err);
    }
    
})

// 修改商品
.put(async (req,res)=>{//req.body=>{price,size,nmae}
    let {id} = req.params;

    // 循环传入的参数
    let str = ''
    for(let key in req.body){
        str += key + '="' + req.body[key] + '",'
    }
    str = str.slice(0,-1);
    let sql = `update goods set ${str} where id=${id}`;

    try{
        let data = await db.query(sql);
        res.send(formatData());
    }catch(err){
        res.send(formatData({msg:err,status:400}));
    }
})

module.exports = Router;