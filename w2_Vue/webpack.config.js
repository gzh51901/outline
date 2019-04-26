/**
 * Webpack 的配置文件
 * gulp是基于任务的构建工具，webpack是基于配置的构建工具
 */

 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const { VueLoaderPlugin } = require('vue-loader');

 // 导出配置模块
 module.exports = {
     // 设置入口文件
     entry:'./src/app.js',

     // 输出配置
     output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'js/[name]-bundle.js'
    },

    // 服务器webpack-dev-server
    devServer:{
        contentBase: path.resolve(__dirname,'./src'),
        open:true
    },

    // 加载器loader
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:['vue-loader']
            }
        ]
    },

    plugins:[
        // 依据html模板生成一个自动引用你打包后的文件（js或css）的新的html页面
        new HtmlWebpackPlugin({
            template:'./src/template.html'
        }),

        // Vue-loader 15.x之后的版本都需要伴随 VueLoaderPlugin， 否则报错
        new VueLoaderPlugin(),
    ]
 }