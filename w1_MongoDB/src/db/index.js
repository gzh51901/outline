/**
 * MongoDB
 */

//  引入模块中的客户端对象
 const {MongoClient} = require('mongodb');
 const {mongo:mongourl,database} = require('../config.json');

//  利用MongoClient连接数据
// Nodejs某些方法的特性：
// * 有回掉函数：执行回掉函数并传入参数
// * 无回掉函数：返回promise对象
async function connect(){
    let client = await MongoClient.connect(mongourl,{ useNewUrlParser: true });

     // 连接数据库，无则自动创建
     let db = client.db(database);

     return {
         db,
         client
     }
}

/**
 * @增
 */
exports.create = async (colName,data)=>{
    let {db,client} = await connect();

    // 根据colName获取集合
    let collection = db.collection(colName)
    // collection[Array.isArray(data) ? 'insertMany':'insertOne'](data,(err,result)=>{
    //     // 插入成功后的回调
    // });

    let result;
    try{
        result = await collection[Array.isArray(data) ? 'insertMany':'insertOne'](data)
    }catch(err){
        result = err
    }

    // 关闭当前连接，释放资源
    client.close();

    return result;
}

/**
 * @删
 */
exports.delete = ()=>{

}

/**
 * @改
 */
exports.update = ()=>{

}

/**
 * @查
 */
exports.query = ()=>{

}