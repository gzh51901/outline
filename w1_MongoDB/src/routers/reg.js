const express = require('express');
const Router = express.Router();

const db = require('../db');
const {formatData} = require('../utils');

let colName= 'user';

// 注册用户
Router.post('/',async (req,res)=>{
    let result
    try{
        result = await db.create(colName,{...req.body})
        result = formatData({data:result})
    }catch(err){
        result = formatData({status:400,msg:err})
    }
    res.send(result);
})


module.exports = Router;