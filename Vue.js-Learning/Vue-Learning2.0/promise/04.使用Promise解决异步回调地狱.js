const fs = require('fs');

function getFileByPath(path) {
    return new Promise(function (resolve,reject) {
    fs.readFile(path,'UTF-8',(err,dataStr) => {
            if(err) reject(err);
            resolve(dataStr);
        })
    })
}
// 先读取文件1再读取文件2再读取文件3
// 注意：通过 .then()指定回调函数的时候，成功的回调函数必须传，失败的回调函数，可以省略不传
// 在一个.then 结束后，再执行方法并且return出去，相当于又创建了一个Promise实例并且return了出去，然后再在后面进行.then操作

// 如果前面的promise执行失败，我们不想让后续的promise操作被终止，可以为每一个promise指定失败的回调
// getFileByPath('./files/11.txt').then(function(data){ //第一个路径故意错误演示报错
//     console.log(data);
//     return getFileByPath('./files/2.txt');
// },function(err){
//     console.log(err.message);
//     return getFileByPath('./files/2.txt');
// }).then(function(data){
//     console.log(data);
//     return getFileByPath('./files/3.txt');
// },function(err){
//     console.log(err.message);
//     return getFileByPath('./files/3.txt');
// }).then(function(data){
//     console.log(data);
// },function(err){
//     console.log(err.message);
// })

// 当我们有这样的需求：哪怕前面的Promise执行失败了，但是不要影响后续的Promise的正常执行，此时我们可以单独为每一个Promise通过.then()指定一下失败的回调，看上面的操作

// 但有时候，我们有这样的需求，和上述需求正好相反：如果后面的Promise执行依赖于前面的Promise执行的结果，如果前面的失败了，后面就没有执行下去的意义了，此时，我们想要实现，一旦有报错，立马终止所有Promise的执行

getFileByPath('./files/1.txt').then(function(data){
    console.log(data);
    return getFileByPath('./files/22.txt'); // 这里错误在第二个路径，在报错之前，第一个路径正常输出
}).then(function(data){
    console.log(data);
    return getFileByPath('./files/3.txt');
}).then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err.message);
})

// catch的作用，如果前面有任何的Promise执行错误，则立即终止所有的promise的执行