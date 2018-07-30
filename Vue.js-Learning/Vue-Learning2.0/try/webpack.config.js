

module.exports = {
    entry:'./src/main.js',
    output:{
        filename:'boundle.js'
    },
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            //处理图片路径的lodaer
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:['url-loader?limit=55236&name=[hash:8]-[name].[ext]']},
            //limit给定的值是图片的大小，大小是字节(byte)，如果我们引用的图片大于或等于给定的limit值，
            //则不会被转为base64格式的字符串，如果小于给定的值则会被转为base64编码
            //第二个参数，name可以写成[name].[ext]，这样图片不会被重命名，但如果出现了重名的不同图片，就会被层叠
            //或者写成[hash:8]-[name].[ext]给他们加上前缀的哈希值以区别不同 
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:['url-loader']},//处理字体文件配置项
            {test:/\.js$/,use:['babel-loader'],exclude:/node_modules/},//配置Babel来转换高级语法
        ]
    }
}