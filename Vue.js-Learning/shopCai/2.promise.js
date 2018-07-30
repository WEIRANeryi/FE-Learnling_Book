//resolve转向成功态
//reject转向失败态   resolve和reject均是函数
//promise的实例就有一个then方法,then方法中有两个参数
let p = new Promise((resolve,reject)=>{
    setTimeout(function () {
        let a = "蘑菇";
        resolve(a);
    },2000)
});
p.then((data)=>{//规定，两个参数，第一个参数与成功态有关，第二个参数与失败态有关
    console.log(data);//第一个回调函数就是成功态才会执行，参数就resolve返回的值
},(err)=>{
    console.log("err");
});
