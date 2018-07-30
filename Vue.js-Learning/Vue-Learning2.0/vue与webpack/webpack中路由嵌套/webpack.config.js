//vue-loader@15版本与之前的vue-loader不同，需要添加配置信息，并在plugins中创建配置对象
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    entry:'./src/main.js',
    output:{
        // path:'/home/cyan/Desktop/Vue.js/Vue-Learning2.0/vue与webpack/webpack-vue/dist',
        filename:'bundle.js'
    },
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            //处理图片路径的lodaer
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:['url-loader?limit=55236&name=[hash:8]-[name].[ext]']},
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:['url-loader']},//处理字体文件配置项
            {test:/\.js$/,use:['babel-loader'],exclude:/node_modules/},//配置Babel来转换高级语法
            {test:/\.vue$/,use:['vue-loader'],exclude: /node_modules/}
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ],
    resolve:{
        alias: {//修改vue 被动导入时候的包的路径
            "vue$":"vue/dist/vue.js"
        }
    }
}