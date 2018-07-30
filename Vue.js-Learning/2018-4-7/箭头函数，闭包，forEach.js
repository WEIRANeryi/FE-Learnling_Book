// function a(b) {
//     return function (c) {
//         return b+c;
//     }
// }

// console.log(a(1)(2));
//上面的就等价于

let a = b => {return c=> b+c};
console.log(a(1)(2));

//上面的函数改一改
let c = function (b) {
    return function (c) {
        return b+c;
    }
}(1);
//c接收的变量是一个引用数据类型，此时没法销毁函数执行的作用域形成闭包

//forEach也能改写成箭头函数
[1,2,3].forEach(item => console.log(item));