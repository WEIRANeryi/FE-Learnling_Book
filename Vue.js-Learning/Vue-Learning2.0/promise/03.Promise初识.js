// 1.promise是一个构造函数，既然是构造函数，那么我们就可以 new Promise() 得到一个Promise的实例
// 2.在Promise上，有两个函数，分别叫做resolve（成功之后的回调函数）和reject（失败之后的回调函数）
// 3.在Promise构造函数的Prototype属性上有一个.then()的方法，也就是说，只要是Promise构造函数创建的实例，都可以使用.then()方法
// 4.Promise表示一个异步操作，每当我们new 一个 Promise的实例，这个实例就表示一个具体的异步操作
// 5.既然Promise创建的实例，是一个异步操作，那么这个异步操作的结果，只能有两种状态：
// 5.1：状态1：异步执行成功
// 5.2：状态2：异步操作失败
// 5.3：由于Promise的实例是一个异步操作，所以只要内部拿到操作的结果后，无法使用return把操作的结果返回给调用者，这个时候，只能使用回调函数，来把成功或者失败的结果返回给调用者
// 6.我们可以在 new 出来的Promise实例上调用.then()方法，预先为这个Promise异步操作指定成功（resolve）和失败（reject）的回调函数

// 注意这里new出来的promise只是代表形式上的一个异步操作；
// 什么是形式上的异步操作：就是说，我们只知道它是一个异步操作，但是做什么具体的异步事情，目前还不清楚
// let promise = new Promise();
// 这是一个具体的异步操作，function指定一个异步操作
// let promise = new Promise(function(){
//     //这里的funciton就是具体的异步操作
// });

const fs = require('fs');


// 每当new一个Promise实例的时候，就会立即执行这个异步操作中的代码
// 也就是说new的时候，除了能够得到一个promise实例之外，还会立即调用我们为Promise构造函数传递的那个function，执行这个function中的异步操作代码
// let promise = new Promise(function () {
//     fs.readFile('./files/1.txt','UTF-8',(err,dataStr) => {
//         if(err) throw err;
//         console.log(dataStr);
//     })
// })

// 如果不想异步操作的立刻调用，我们把它用函数封装起来，调用函数的时候才创建这个Promise实例
// function getFileByPath(path) {
//     let promise = new Promise(function () {
//     fs.readFile(path,'UTF-8',(err,dataStr) => {
//             if(err) throw err;
//             console.log(dataStr);
//         })
//     })
// }

// 初衷：给路径，返回读取到的内容，或者错误信息
function getFileByPath(path) {
    let promise = new Promise(function (resolve,reject) {
    fs.readFile(path,'UTF-8',(err,dataStr) => {
            if(err) reject(err);
            resolve(dataStr);
        })
    })

    return promise;
}

let p = getFileByPath('./files/1.txt');
p.then(function(data){
    console.log(data);
},function(err){
    console.log(err.message);
})