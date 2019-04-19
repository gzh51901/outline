/**
 * 获取请求参数
 * * 查询字符:req.query
 * * get请求参数：req.params
 */

const express = require('express');
const Router = express.Router();

// const mysql = require('mysql');

const {create} = require('../db');
const {formatData} = require('../utils');

const colName = 'goods';

// 增加
Router.post('/',async (req,res)=>{
    let data = req.body;

    let result;
    try{
        result = await create(colName,data);
        result = formatData({data:result})
    }catch(err){
        result = formatData({status:400,msg:err})
    }
    
    console.log('end:',result)
    res.send(result);

})


// 获取商品信息
Router.route('/:id')

.get(async (req,res)=>{
    res.send('query');
})

.delete(async (req,res)=>{
    
    res.send('delete');
})

// 修改商品
.put(async (req,res)=>{//req.body=>{price,size,nmae}
    res.send('modified');
})

module.exports = Router;