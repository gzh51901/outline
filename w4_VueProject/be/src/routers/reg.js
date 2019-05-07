/**
 * 用户注册
 * 参数：
 * @params  username    用户名
 * @params  password    密码
 */
const express = require('express');
const Router = express.Router();

const db = require('../db');
const {formatData,md5} = require('../utils');

// 集合名称
const colName = 'user';


// 注册用户
Router.post('/',async (req,res)=>{
    let {username,password} = req.body;

    console.log('加密前：',password)

    // 利用md5加密密码

    password = md5(password);
    
    console.log('加密后：',password)

    let result = {}
    try{
        result = await db.create(colName,{username,password,regtime:Date.now()});
        result = formatData({data:result})
    }catch(err){
        result = formatData({status:400,msg:err})
    }

    res.send(result);
});

// 检测用户是否已注册
Router.get('/check',async (req,res)=>{
    let {username} = req.query;console.log('myquery:',req.query)
    
    let result = {}
    try{
        result = await db.find(colName,{username});
        if(result.length>0){
            result = formatData({status:400})
        }else{
            result = formatData()
        }
    }catch(err){
        result = formatData()
    }

    res.send(result);
})

module.exports = Router;