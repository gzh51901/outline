const express = require('express');
const Router = express.Router();


const goodsRouter = require('./goods');
const cartRouter = require('./cart');
const listRouter = require('./list');
const regRouter = require('./reg');
const loginRouter = require('./login');
const uploadRouter = require('./upload');
const proxyRouter = require('./proxy');



// 格式化传入的参数
Router.use(express.json(),express.urlencoded({ extended: false }));

// 配置路由信息
Router.use('/goods',goodsRouter);
Router.use('/cart',cartRouter);
Router.use('/list',listRouter);
Router.use('/reg',regRouter);
Router.use('/upload',uploadRouter);
Router.use('/login',loginRouter);
Router.use('/proxy',proxyRouter);

module.exports = Router;
