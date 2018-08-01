// 需求：封装一个方法，给一个读取文件的路径，该方法能读取文件，并把内容返回

const fs = require('fs');
const path = require('path');

// fs.readFile(path.join(__dirname,'./files/1.txt'), 'UTF-8', (err, dataStr) => {
//     if (err) throw err;
//     console.log(dataStr);
// });

// 但由于读取文件的操作的是异步的，封装成方法后，若是用一个值去接收读取的内容，在方法内是不行的，因为已经执行完了方法，而读文件操作还在异步执行，因此没有可以return的值
// 所以以下的方法存在问题，会读取到undefined
// function getFileByPath(path) {
//     fs.readFile((path), 'UTF-8', (err, dataStr) => {
//         if (err) throw err;
//         return dataStr;
//     });
// }

// 为了能够成功获取到读取的值，可以采用回调函数的形式来获取
/**
 *
 * @param {*} path  文件路径
 * @param {*} callback 中有两个参数，第一个是失败的结果，第二个是成功的结果
 * 如果成功后，返回的结果应该位于callback参数的第二个位置，此时由于第一个位置没有出错，所以放一个null，如果失败了，则第一个位置放Error对象，第二个位置放undefined
 */
function getFileByPath (path,callback) {
    fs.readFile((path), 'UTF-8', (err,dataStr) => {
        //如果报错，进入if分支后，if后面的代码就没必要执行了
        if (err) return callback(err);
        callback(null,dataStr);
    })
}


getFileByPath(path.join(__dirname,"./files/1.txt"), (err,dataStr) => {
    if (err) {
        return console.log(err.message);
    }
    console.log(dataStr);
});