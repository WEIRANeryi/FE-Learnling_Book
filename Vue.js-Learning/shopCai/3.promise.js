//写一个给女朋友买包的方法:
function buyPack() {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           if(Math.random()>0.5){
               resolve("买");
           }else {
               reject("不买");
           }
       },Math.random()*1000);//假设抛硬币买不买包，抛的时间短就代表正面，买包，反之不买包;使它变为随机事件，来体会promise的then方法
    });
}

buyPack().then(function (data) {
    console.log(data);
},function (data) {
    console.log(data);
});