const express = require('express');
const Router = express.Router();

const db = require('../db');
const {formatData} = require('../utils');

let colName= 'user';

// 注册用户
Router.route('/')

.post(async (req,res)=>{
    try{
        result = await db.create(colName,{...req.body})
        result = formatData({data:result})
    }catch(err){
        result = formatData({status:400,msg:err})
    }
    res.send(result);
})

.get(async (req,res)=>{console.log(7777)
    // 判断用户名是否存在
    let result = await db.find(colName,{username:req.query.username});
    if(result.length>0){
        res.send(formatData({status:250,msg:'用户名已存在'}));
        return;
    }

    res.send(formatData());
})


module.exports = Router;