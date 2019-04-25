const express = require('express');
const ws = require('ws');
const http = require('http');

// 实现web服务器
const app = express();

// 通过http模块连接web服务器和socket服务器,让其共用一个端口
let server = http.Server(app);

// 实现websocket服务
// 创建Websocket服务器
const socket = new ws.Server({
	server
	// port:3003
});

// 内置中间件：利用中间件实现静态资源服务器
app.use(express.static('./'));


let PORT = 1901;
server.listen(PORT,()=>{
    console.log('server is running on port %s',PORT);
});


// 给socket添加事件处理函数
// 当客户端连接socket服务器时执行事件处理函数
// 每个客户端连接都会记录到:socket.clients
socket.on('connection',client=>{
    // client:客户端对象

    // 当客户端发送消息时执行message事件处理函数
    client.on('message',msg=d>{
        console.log(msg);

        // 接收到消息,广播给所有用户
        // socket.clients.forEach(client=>{
        //     client.send(msg)
        // })

        socket.broadcast(msg);
    });
    
    // 当客户端退出时执行close事件处理函数
    client.on('close',()=>{
        // socket.clients.forEach(client=>{
        //     client.send({status:0,data:'logout'})
        // })
        let data = JSON.stringify({status:0,data:{username:'xxx'}})
        socket.broadcast(data)
    })
})

//定义广播方法
socket.broadcast = msg=>{  
    socket.clients.forEach(client=>{
        // 服务器主动发消息给客户端
        client.send(msg)
    });  
}; 