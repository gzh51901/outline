
const request = require('request');
const cheerio = require('cheerio');

// 请求网络接口数据
// request.get('https://cnodejs.org/api/v1/topics?page=1&limit=10', (error, response, body) => {
//     // error: 错误信息，默认null
//     // response: 相应对象
//     // body: 请求响应内容
//     console.log(body)
// });


// 爬虫
request('http://item.moonbasa.com/p-011019103.html',(err,res,body)=>{
    let $ = cheerio.load(body);

    let goodsname = $('.p_info h2 em').text();
    

    let goods = {
        goodsname,
        price:$('.leftPrice b').text()
    }

    console.log(goods);
});