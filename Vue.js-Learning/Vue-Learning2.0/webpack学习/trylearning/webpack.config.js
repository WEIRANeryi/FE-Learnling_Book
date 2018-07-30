// const webpack = require('webpack')//为了配置插件节点，引入项目本地的webpack，这是启用热更新的第２步


//全局下模块导出
module.exports = {
    entry:'./src/main.js',  //入口文件：即为要打包的文件
    output:{//出口文件：要打包到的地方　生产文件
        path: '/home/cyan/Desktop/Vue.js/Vue-Learning2.0/webpack学习/trylearning/dist',//绝对路径
        filename: 'bundle.js'
    },
    
    //该方式了解即可
    // devServer: {//这是配置　dev-server命令参数的第二种形式，相对来说，这种方式比较麻烦
    //     // --port 3000 --contentBase src --open
    //     open:true,//自动打开浏览器
    //     port:3000,//设置启动服务端口
    //     contentBase: 'src',//指定托管的根目录
    //     // mode: development,//设置模式为开发环境
    //     hot: true //启动热更新的第１步
    // },
    // plugins:[//配置插件的节点
    //     new webpack.HotModuleReplacementPlugin(),//new 一个热更新的模块对象，这是启用热更新的第３步
    // ]
    module:{//这个节点用于配置所有的第三模块加载器
        rules:[//第三方模块匹配规则
            {test: /\.css$/,use: ['style-loader','css-loader']},//配置处理.css文件的loader模块
        ]   
    }
}