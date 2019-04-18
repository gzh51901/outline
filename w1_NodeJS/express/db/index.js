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

exports.query = sql=>{
    return new Promise((resolve,reject)=>{
        pool.query(sql,(err, results, fields)=>{
            if(err){
                return reject(err);
            }
            
            console.log(err,results,fields)
            resolve(results[0]);
        })
    });
    
}