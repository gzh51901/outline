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