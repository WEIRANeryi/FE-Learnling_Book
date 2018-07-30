//入口文件

//如何在webpack 构建的项目中，使用Vue开发

//普通的　使用vue:
//1.使用script标签，引入Vue的package
//2.创建一个　id 为　app div的容器
//3.通过new Vue得到一个vm的实例

//在webpack中尝试使用Vue:
//在webpack中使用import Vue from 'vue'　导入的Vue 构造函数功能并不完整，只提供了runtime-only的方式，并没有提供像网页中引用的那种方式

/*-------------------------------------------------------------------------------*/

/*import Vue from 'vue'*/  //直接使用该方法不行，因为根据导包的规则，我们发现vue中的package.json中的mian指向的是vue.runtime.common.js　这个文件并不完整

//包的查找规则：
//1.找项目的根目录中有没有node_modules的文件夹
//2.在node_modules中根据包名找对应的vue文件夹
//3.在vue文件夹中找一个叫做package.json的包配置文件
//4.在package.json文件中，查找一个main属性［mian属性指定了这个包在被加载的时候的入口文件］

//引入Vue方案１
// import Vue from '../node_modules/vue/dist/vue.js'

//在使用方案１导入vue包后，使用以前的方式定义组件使用组件没有问题，但是当使用引入方案２的情况下，直接定义组件使用组件是会有问题的
/*let login = {
    template:'<h1>这是login组件，是使用网页中的形式创建出来的</h1>'
}

let vm = new Vue({
    el:'#app',
    data:{
        msg:123
    },
    components: {
        login
    }
}) */

/*-------------------------------------------------------------------------------*/

//引入Vue方案2
import Vue from 'vue' //路径在webpack.config.js配置文件中配置修改


//１．导入login组件
import login from './login.vue'
//但默认　webpack 无法打包.vue 文件，需要安装相关loader
//npm install vue-loader vue-template-compiler -D
//然后在配置文件中新增loader配置项

let vm = new Vue({
    el:'#app',
    data:{
        msg:123
    },
    // comments:{
    //     login
    // },
    render:function(createElements){//在webpack中可以使用components渲染组件，或者拿render函数替换el
        return createElements(login);
    }

    // 简写形式
    // render: c => c(login)
})


//总结梳理
//1.安装vue的包，　npm install vue -S
//2.由于在 webpack中推荐使用.vue 这个组件模板文件定义组件，所以，需要安装的能解析文件的loader　npm　install vue-loader vue-template-complier -D
//3.在main.js中导入vue 模块 import　Vue　from  'vue'
//4.定义一个.vue结尾的组件，其中，组件有三部分组成:template css script 
//5.使用improt导入这个组件
//6.创建vm的实例　let vm = new Vue({el:'#app',render:c => c(login)})
//7.在页面中创建一个id为app的div元素，作为我们vm实例要控制的区域


import m1,{title} from './test.js'
console.log(m1);//成功输出了导入的对象
console.log(title)