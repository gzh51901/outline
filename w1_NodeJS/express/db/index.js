// 
const mysql = require('mysql');
var pool  = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    port: 3306,
    database: 'jiaoxue',
    multipleStatements: true
});


exports.create = ()=>{

}
exports.delete = ()=>{

}

exports.update = ()=>{

}

exports.find = (sql)=>{
    return new Promise((resolve,reject)=>{
        pool.query(sql,(err, results, fields)=>{
            if(err){
                reject('查询数据库错误');
            }
    
            resolve(results[0]);
    
        
        })
    });
    
}