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

const colName = 'goods';

// 增加
Router.post('/',async (req,res)=>{
    let data = req.body;

    let result;
    try{
        result = await db.create(colName,data);
        result = formatData({data:result})
    }catch(err){
        result = formatData({status:400,msg:err})
    }

    res.send(result);

})


// 获取商品信息
Router.route('/:id')

.get(async (req,res)=>{
    let {id} = req.params;
    
    let result;
    try{
        result = await db.find(colName,{_id:id})
        result = formatData({data:result})
    }catch(err){
        result = formatData({status:400,msg:err})
    }
    res.send(result);
})

.delete(async (req,res)=>{
    let {id} = req.params;
    
    let result;
    try{
        result = await db.delete(colName,{_id:id})
        result = formatData({data:result})
    }catch(err){
        result = formatData({status:400,msg:err})
    }
    res.send(result);
})

// 修改商品
.put(async (req,res)=>{//req.body=>{price,size,nmae}

    let {id} = req.params;

    let data = {};

    // 遍历修改属性，并写入查询
    for(let key in req.body){
        data[key] = req.body[key];
    }
    
    let result;
    try{
        result = await db.update(colName,{_id:id},data);
        result = formatData({data:result})
    }catch(err){
        result = formatData({status:400,msg:err})
    }
    res.send(result);
})

module.exports = Router;