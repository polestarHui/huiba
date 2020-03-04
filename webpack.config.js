const path = require('path') // 引用node包里的path工具
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode:'development',// 设置打包方式为开发者模式，production为生产者模式
    entry:'./src/main.js',// 配置入口文件
    output:{ //配置出口文件
        filename:'bundle.js', //配置打包后的文件名，前面可加hash值：[hash:8]-bundle.js
        path:path.join(__dirname,'./dist')// 配置打包后文件的输出路径
    },
    module:{
        rules:[ //这里匹配的是规则
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']}, //这是一个正则表达式：匹配到以.less结尾的文件，以这两个loader来解析
            {
                test: /\.(png|svg|jpg|gif|webp)$/,
                use: 'file-loader'
            }, // 匹配到图片文件，以file-loader来解析。
            // {test:/\.(png|svg|jpg|gif|webp)$/,use:'url-loader'},// 匹配到图片文件，以url-loader来解析。
            {
                test: /\.(otf|eot|svg|ttf|woff|woff2|mp3|mp4)$/,
                use: 'url-loader'
            }, //防止mui的.ttf文件报错  
            {
                test: /\.js$/, 
                exclude: /node_modules/, //由于babel转换比较消耗性能，并且node_modules的文件比较多，也并不需要转换，所以要排除 
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets:['@babel/preset-env'] //可以根据配置的目标浏览器或者运行环境来自动将ES2015+的代码转换为es5。
                    }
                }]// 这里配置的是babel转换ES6语法的规则
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
        ]
    },
    devServer:{
        contentBase:'./src',// 自动打包显示的文件路径，会自动找到src文件夹下的index.html文件
        hot:true,// 启用热更新
        port:3060, // 启用的端口号
        open:true // 自动打开浏览器
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',// 插件打包后输出的文件名
            template:'./src/index.html' // 插件打包文件的路径
        }),
        new VueLoaderPlugin()
    ]


}
