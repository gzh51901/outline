const express = require('express');
const Router = express.Router();

const db = require('../db');
const {formatData} = require('../utils');

let colName= 'user';

Router.post('/',async (req,res)=>{
    let {username,password} = req.body;

    let result = await db.find(colName,{username,password})
    if(result.length>0){
        //登录成功
        let data = result[0];
        res.send(formatData({data:{id:data._id}}));
    }else{
        // 用户名或密码不正确
        res.send(formatData({status:400,msg:'fail'}));
    }
})

module.exports = Router;