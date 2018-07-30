//ajax三部曲,举例jquery中
/* $.ajax({
    url:'',
    data:{},
    type:'get',
    dataType:'json',
    success
});*/


//封装一个ajax方法
function ajax({url='',type="get",dataType='json'}) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(type,url,true);
        xhr.responseType = dataType;
        xhr.onload = function () {
            resolve(xhr.response);//成功调用成功的方法
        };
        xhr.onerror = function () {
          reject(err);//失败调用失败的方法
        };
        xhr.send();
    });
}
