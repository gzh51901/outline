/**
 * 模块化开发
 * 一个文件就是一个模块
 * 模块有独立的作用域，不能相互调用，除非暴露出接口
 */

const crypto = require('crypto');

function formatData({data=[],msg='success',status=200}={}){
    if(status==400){
        msg = 'fail';
    }
    return {
        data,
        msg,
        status
    }
}

// 利用md5加密密码
function md5(data,{inputEncoding="utf8",encoding="hex"}={}){
    const hash = crypto.createHash('md5');
    
    return hash.update(data,inputEncoding).digest(encoding);
}

module.exports = {
    formatData,
    md5
}