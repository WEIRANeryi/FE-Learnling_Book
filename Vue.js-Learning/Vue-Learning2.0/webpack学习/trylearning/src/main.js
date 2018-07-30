//这个mian.js是我们项目的JS入口文件

// 1.导入jQuery
// import ***from*** 是ES6中导入模块的方式
//由于ES6代码浏览器可能解析不了，因此这一行执行会报错
import $ from 'jquery'

//使用import语法导入css样式表
import './css/index.css'
//但webpack默认只能处理js文件，不能处理其他类型的文件
//如果要处理非js类型文件，我们需要安装一些第三方的loader加载器
//如果需要打包处理css文件，需要安装npm install style-loader css-loader -D
//打开webpack.config.js配置文件，在里面新增一个配置节点，叫做module,是一个对象，在这个对象上，有一个rules属性
//rules这个属性的数组中存放了所有第三方文件的匹配和处理规则

//注意：webpack处理第三方文件类型的过程：
//1.发现这个要处理的文件是不是ＪＳ文件，然后就去查找有没有对应的第三方loader规则
//2.如果能找到对应的规则，就会调用对应的loader处理，这种文件类型
//3.在调用loader的时候，是从后往前调
//4.当最好一个　loader调用完毕，会把处理的结果，直接交给webpack进行打包，最终输出到bundle.js中去

$(function(){
    $('li:odd').css('backgroundColor','lightpink');
    $('li:even').css('backgroundColor','lightblue');
})


//使用webpack 打包工具在全局安装后，如果没有webpack命令则需要建立软连接
//使用webpack 命令需要指定打包模式　--mode development 或　--mode production(写在最后)
//配置package.json文件可以省去部分命令，配置webpack．config.js文件可以指定好输入和打包输出目录

//webpack-dev-server工具可以实现实时打包，但由于不是全局安装，所以需要在package.json中写好脚本命令
//webpack-dev-server工具打包好的文件，实际上并没有放到物理磁盘中，而是托管在了电脑的内容中，所以我们在项目根目录中找不到打包好的文件，
//我们需要根据命令行给出的信息打开对于的端口，给文件引入对于的路径，比如这里的项目指明了打包好的文件在/目录下(虽然看不见)，引入后就会生效
//webpack-dev-server 可以在其脚本命令中配置参数　--open 可以自动打开浏览器　--port 3000 指定服务器端口号 
//--contentBase src　指定打开浏览器的默认路径内容　--hot 可以热重载　，而不是再次打包一次
//建议参数都写在　--open之前
