/**
 * 模块化开发
 * 一个文件就是一个模块
 * 模块有独立的作用域，不能相互调用，除非暴露出接口
 */

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

module.exports = {
    formatData
}