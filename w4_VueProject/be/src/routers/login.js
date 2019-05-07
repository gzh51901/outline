const express = require('express');
const Router = express.Router();

const db = require('../db');
const {formatData,md5} = require('../utils');

const colName = 'user';

Router.get('/',async (req,res)=>{
    let {username,password} = req.query;
    console.log('加密前：',password)

    // 加密密码后再查询
    password = md5(password);

    console.log('加密后：',password)

    let result = {}
    try{
        result = await db.find(colName,{username,password});
        if(result.length>0){
            result = formatData()
        }else{
            result = formatData({status:400,msg:'用户名或密码错误'})
        }
    }catch(err){
        result = formatData({status:400,msg:err})
    }

    res.send(result);
})

module.exports = Router;