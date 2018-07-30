
import $ from 'jquery'

$(function(){
    $('li:odd').css('backgroundColor','lightpink');
    $('li:even').css('backgroundColor','lightblue');
})

//如果要通过路径的形式引入node_modules中相关文件，可以直接省略node_moudles目录，直接写包的名称即可
import 'bootstrap/dist/css/bootstrap.css'
import './css/index.css'


//class关键字是ES6中的新语法，用来实现ES6中面向对象编程的方式
class Person {
    // 使用static关键字，可以定义静态的属性
    // 所谓的静态属性，就是可以直接通过类名直接访问的属性
    // 实例属性:只能通过类的实例来访问的属性
    static info = {name:'zs',age:20}//webpack处理不了static关键字，需要一个合适loader处理
}
//在webpack中默认只能处理一部分ES6新语法，一些更高级的ES6语法或者更高级的ES7语法是处理不了的，这时候就需要第三方的loader处理高级语法
//通过Babel，可以将高级的语法转换为低级的语法
//1.在webpack中可以运行如下两套 命令，安装两套包去安装Babel相关的功能
//1.1.第一套包：npm install babel-core babel-loader babel-plugin-transform-runtime -D
//1.2.第二套包：npm install babel-preset-env babel-preset-stage-0 -D
//2.打开webpack的配置文件，在module节点下rules中添加一个新的匹配规则：
//2.1. {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
//2.2.注意在配置babel的loader规则时，必须把node_modules目录，通过exclude排除掉，原因：
//2.2.1.如果不排除 ，则babel会把bode_modules中所有第三方JS文件都进行编译打包，这样会非常消耗内存以及CPU性能，使得打包速度十分的缓慢
//2.2.2.哪怕最终Babel把所有node_modules中所有JS转换完毕了，项目也无法正常进行
//3.在项目的根目录中，新建一个叫做 .babelrc的Babel配置文件，这个配置文件，属于JSON格式，所以在写这个配置文件的时候，必须符合JSON格式
//3.1 在.babelrc写如下配置
// {
//     "preset": ["env","stage-0"],
//     "plugins": ["transform-runtime"]
// }


console.log(Person.info);