const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWepackPlugin = require('clean-webpack-plugin');

// 导出webpack配置
module.exports = {
    // 入口
    entry:{
        main:'./src/main.js'
    },

    // 出口
    output:{
		path:path.resolve(__dirname,'./dist'),
		filename:'js/[name]-[hash:5].js'
    },

    // 服务器
    devServer: {
        contentBase: path.join(__dirname, "./src"), 
        port: 1901, // 默认8080
        proxy:{
            '/api':{
                target:'http://localhost:10086',
                changeOrigin:true
            }
        },
        // host:'0.0.0.0',//localhost,ip,127.0.0.1都生效
    },
    
    // 加载器
    module:{
		rules:[
            {
				test:/\.js|jsx$/,
				exclude:path.resolve(__dirname,'./node_modules'),//排除node_modules目录
				
				use:[{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/react','@babel/env'],
                        plugins: [
                            '@babel/proposal-class-properties'
                            // ["import", { libraryName: "antd-mobile", style: "css" }] // `style: true` 会加载 less 文件
                        ]
                    }
				}]
            },
            { 
				test: /\.css$/, 
				loader: ['style-loader','css-loader'] 
            },
			{
				test:/\.scss$/,
				loader:['style-loader','css-loader','sass-loader']
            },
            {
				test:/\.(?:jpe?g|png|gif)$/,
				use:{
					loader:'url-loader',
					options:{
						limit:10000,
						name: 'img/[name].[hash:8].[ext]'
					}
				}
			}
        ]
    },

    // 插件
    plugins:[
		new HtmlWebpackPlugin({
			template:'./src/template.html',
			hash:true,
			title:'首页'
        }),
        // new HtmlWebpackPlugin({
		// 	template:'./src/template.html',
		// 	hash:true,
        //     title:'购物车',
        //     filename:'cart.html' //默认index.html
        // }),
        new CleanWepackPlugin()
    ]
}