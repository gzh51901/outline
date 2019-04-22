const express = require('express');
const Router = express.Router();
const request = require('request');

const proxy = require('http-proxy-middleware');

// Router.get('/jiuxian',(req,res)=>{
//     request.post('http://www.jiuxian.com/act/selectPricebypids.htm', {form:{ids:'3360,16807,52332,84636,25907,17340,53008,84877,84260,33699,40126,25813,52342,82482,22289,85347,43294,84666,14458,60300,12701,62363,84121,35550,64111,81668,34071,84690,1508,1543,29859,48811,84602,85468,82107,46209,24223,85898,28811,19288,40383,70660,84105,84129,48922,81954,85276,84561,30477,12010'}},(err,response,body)=>{
//         // console.log(body)
//         res.send(body)
//     }) 
// })

// 代理配置
// /proxy/jiuxian/act/selectPricebypids.htm -> http://www.jiuxian.com/proxy/jiuxian/act/selectPricebypids.htm -> http://www.jiuxian.com/act/selectPricebypids.htm
var options = {
    target: 'http://www.jiuxian.com', // target host 
    changeOrigin: true,               // needed for virtual hosted sites 
    pathRewrite: {
        '^/proxy/jiuxian' : '/'     // rewrite path 
    }
};

Router.use('/jiuxian',proxy(options))

module.exports = Router;