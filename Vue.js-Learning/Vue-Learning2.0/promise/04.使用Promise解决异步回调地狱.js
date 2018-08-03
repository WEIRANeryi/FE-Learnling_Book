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
getFileByPath('./files/1.txt').then(function(data){
    console.log(data);

    return getFileByPath('./files/2.txt');
}).then(function(data){
    console.log(data);

    return getFileByPath('./files/3.txt');
}).then(function(data){
    console.log(data);
})