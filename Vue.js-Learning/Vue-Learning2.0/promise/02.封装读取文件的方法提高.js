// 需求：封装一个方法，给一个读取文件的路径，该方法能读取文件，并把内容返回
const fs = require('fs');
const path = require('path');
// 写成一个回调函数，会使代码可读性不高，为了便于理解，把两个回调函数分开写，成功的是成功的回调函数，失败的是失败的回调函数
function getFileByPath (path,succCb,errCb) {
    fs.readFile((path), 'UTF-8', (err,dataStr) => {
        //如果报错，进入if分支后，if后面的代码就没必要执行了
        if (err) return errCb(err);
        succCb(dataStr);
    })
}


getFileByPath(path.join(__dirname,"./files/1.txt"), (err,dataStr) => {
    console.log(err.message);
},(dataStr) => {
    console.log(dataStr);
});

// 现在，新的需求：读取完文件1，再读取文件2，再读取文件3
getFileByPath(path.join(__dirname,"./files/1.txt"), function(data){
    console.log(data);
    getFileByPath(path.join(__dirname,"./files/2.txt"), function(data){
        console.log(data);
        getFileByPath(path.join(__dirname,"./files/3.txt"), function(data){
            console.log(data);
        });
    });
});

// 这种不断嵌套的方式，被称为回调地狱
// 因此可以使用ES6中的promise，来解决回调地狱问题
// 问：Promise的本质是解决地狱回调的，并不能使代码更加简洁 