
/*
    静态资源服务器
        * 根据不同的请求，返回不同的内容给浏览器
*/
// 引入内置模块
const http = require('http');

// 文件处理（读取/写入）
const fs = require('fs');

// 引入url模块，用于url地址格式化
let url = require('url');

// 引入querystring模块，用于GET/POST请求数据格式化
let qs = require('querystring');

// 处理文件路径
let path = require('path');

// 引入mime类型
let mime = require('./mime');

const app = http.createServer((req,res)=>{
    // 格式化url，并格式化url中的search参数
    // 解构文件路径
    let {pathname} = url.parse(req.url,true);//goodslist/pic.jpg
    
    // 得到扩展名
    let extname = path.extname(pathname).substring(1);//.jpg


    // 获取真实路径
    // __dirname：当前文件所在的路径
    let realpath = path.join(__dirname,pathname);
    console.log(__dirname,realpath);


    fs.readFile(realpath,(err,data)=>{
        if(err){
            // 如果读取文件错误，则抛出404
            // Content-Type:用于告诉浏览器返回的是什么内容
            res.writeHead(404,{'content-type':'text/plain;charset=utf8'});
            res.end('你访问的页面不存在');
            return;
        }

        // 正确读取文件
        // .html,jpg,png,git
        res.writeHead(200,{'content-type':mime[extname] + ';charset=utf8'});
        res.end(data);
    })

})

// 引入文件模块
let {PORT} = require('./config.json');

app.listen(PORT,()=>{
	console.log('http://localhost:%s',PORT);
});