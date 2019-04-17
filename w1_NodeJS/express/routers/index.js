const express = require('express');
const Router = express.Router();

const goodsRouter = require('./goods');
// const cartRouter = require('./cart');

// 配置路由信息
// 商品
Router.use('/goods',goodsRouter);
// Router.use('/cart',cartRouter);

module.exports = Router;
