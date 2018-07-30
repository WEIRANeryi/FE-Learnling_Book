//这是node中向外暴露成员的形式
// module.exports = {}

//在ES6中也通过规范的形式，规定了ES6中如何导入和导出模块

//ES6中导入模块，使用import模块名称　from　'模块表示符'　import表示路径
//在ES6中，使用　export default 和　export 向外暴露成员：
let info =  {
    name:'Cyan',
    age:20
}

export default info

//export default 向外暴露的成员，可以使用任意的变量来接收
//同时这种方式也不允许向外暴露多次，只能向外暴露一次
//在一个模块中可以同时使用　export default和exports同时向外暴露



//在node中使用　var 名称　= require('模块标示符')导入模块
//module.exports和exports 来暴露成员

export var title = 'Aqing';

//使用export向外暴露的成员，只能使用{}的形式来接收，叫做　按需导出，变量不能随便接收，可暴露多个成员，暴露多次
//如果某些成员在import的时候，不需要则可以不在{}中定义　
//在export导出的成员，必须严格按照导出的名称接收
//但是，使用export导出的成员，如果想换个名称接收，可以使用as关键字：{ 原名称　as 修改的名称 }来接收
