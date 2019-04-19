/**
 * MongoDB
 */

//  引入模块中的客户端对象
 const {MongoClient,ObjectId} = require('mongodb');
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
 * @param {String} colName   集合名称
 * @param {Object} query     查询条件
 * @return                   返回值
 */
exports.delete = async (colName,query)=>{
    let {db,client} = await connect();
    let collection = db.collection(colName);

    if(query._id){
        // 通过id查询数据必须使用这种格式
        // _id:'xxx' -> _id:ObjectId('xxx');
        query._id = ObjectId(query._id);
    }

    let result;
    try{
        result = await collection.deleteMany(query)
    }catch(err){
        result = err
    }

    // 关闭当前连接，释放资源
    client.close();

    return result;
}

/**
 * @改
 */
exports.update = async (colName,query,data)=>{
    let {db,client} = await connect();
    let collection = db.collection(colName);

    if(query._id){
        query._id = ObjectId(query._id);
    }

    let result;
    try{
        result = await collection.updateOne(query,{$set:data});
    }catch(err){
        result = err;
    }

    // 关闭当前连接，释放资源
    client.close();

    return result;
}

/**
 * @查
 */
exports.find = async (colName,query={},{skip,limit,sort}={})=>{console.log('query:',query);//{_id:'xxx'}
    let {db,client} = await connect();
    let collection = db.collection(colName);

    if(query._id){
        // 通过id查询数据必须使用这种格式
        // _id:'xxx' -> _id:ObjectId('xxx');
        query._id = ObjectId(query._id);
    }

    let result;
    try{
        result = await collection.find(query).toArray();

        // 跳过
        if(skip){
            result = result.skip(skip)
        }

        // 截取数量
        if(limit){
            result = result.limit(limit);
        }

        // 排序
        if(sort){
            result = result.sort(sort);
        }
    }catch(err){
        result = err
    }

    // 关闭当前连接，释放资源
    client.close();

    return result;
}