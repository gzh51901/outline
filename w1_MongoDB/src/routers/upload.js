const express = require('express');
const Router = express.Router();
const path = require('path');
const multer = require('multer');

const db = require('../db');
const {formatData} = require('../utils');

let colName= 'user';

// 配置上传参数
let storage = multer.diskStorage({
    // destination: function (req, file, cb) {
    //   cb(null, './uploads/');
    // },

    // 上传文件保存目录，无则自动创建
    destination:'./uploads/',

    // 格式化文件名
    filename: function (req, file, cb) {
        let ext = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + Date.now() + ext);
    }
})
  
// 设置文件保存目录
let upload = multer({storage});

// 注册用户
// 利用multer作为中间格式化的参数
// * 普通数据：格式化到req.body
// * 图片：格式化到req.file
Router.post('/touxiang',upload.single('touxiang'),async (req,res)=>{
    let {userid} = req.body;
    let result = await db.update(colName,{_id:userid},{touxiang:req.file.path});
    res.send(formatData());
})

// * 图片：格式化到req.files
Router.post('/goods',upload.array('goods',5),async (req,res)=>{
    console.log(req.body,req.files)
    res.send(req.body);
})

module.exports = Router;