
const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

// 请求网络接口数据
// request.get('https://cnodejs.org/api/v1/topics?page=1&limit=10', (error, response, body) => {
//     // error: 错误信息，默认null
//     // response: 相应对象
//     // body: 请求响应内容
//     console.log(body)
// });


/**
 * 爬虫
 * 爬取数据
 * 爬取图片
 *    * 下载图片到本地
 *    * 数据流Stream
 */

//  盘曲单张图片
// request('http://item.moonbasa.com/p-011019103.html',(err,res,body)=>{
//     let $ = cheerio.load(body);

//     let goodsname = $('.p_info h2 em').text();
    
//     // 获取图片
//     let imgurl = $('#largeimg').attr('src');
//     console.log(imgurl)

//     // 获取图片文件名
//     let imgName = path.basename(imgurl);console.log(imgName);

//     // 保存图片到本地
//     request(imgurl) //返回文件流
//     .pipe(fs.createWriteStream('img/'+imgName))

//     let goods = {
//         goodsname,
//         price:$('.leftPrice b').text(),
//         imgurl:'img/'+imgName
//     }

//     console.log(goods);
// });

// 爬取多张图片
request('http://list.moonbasa.com/046401-1-40-0.html?sort=3',(err,res,body)=>{
    let $ = cheerio.load(body);

    let goodslist = [];

    $('.chapList dl').each((i,el)=>{
        

        let $dl = $(el);

        let imgurl = $('img',$dl).attr('data-original');
        let goodsname = $('dd a',$dl).eq(0).text();
        let price = $('dd font',$dl).text();
        let commentQty = $('dd strong b',$dl).text().match(/\d+/)
        commentQty = commentQty===null ? 0 : commentQty[0];

        // 获取图片名字
        let imgName = path.basename(imgurl);
        let url = 'img/'+imgName

        // 下载图片到本地
        request(imgurl) //返回文件流
        .pipe(fs.createWriteStream(url))

        let goods = {
            url,
            goodsname,
            price,
            commentQty
        }

        goodslist.push(goods);
        
    });

    console.log(goodslist);
})