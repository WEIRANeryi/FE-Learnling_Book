//详情分析见knowledge注释
/**
 * ajax工具函数-get
 * @param {any} url (url)
 * @param {any} data (key1=value1&key2=value2) 
 * @param {any} success (callback)
 */
function get(url, data, success) {
    var xhr = new XMLHttpRequest();
    if (data) {
        url += '?';
        url += data;
    }
    xhr.open('get', url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            success(xhr.responseText);
        }
    }
    xhr.send(null);
}

/**
 * ajax工具函数-post
 * @param {any} url (url)
 * @param {any} data (key1=value1&key2=value2)
 * @param {any} success (callback)
 */
function post(url, data, success) {
    var xhr = new XMLHttpRequest();
    xhr.open('post', url);
    if (data) {
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            success(xhr.responseText);
        }
    }
    xhr.send(data);
}

/**
 * 参数越来越多之后，用户如果要传递参数 必须遵循参数的类型和顺序
 * @param {any} url (url)
 * @param {any} type (get or post)
 * @param {any} data (data)
 * @param {any} success (callback)
 */
function ajax_test(url,type,data,success){
    var xhr = new XMLHttpRequest();
    //如果是get并且有数据
    if(type =='get' && data){
        url += '?';
        url += data;
        data = null;//如果是get方法不使用send(data)，这里让它为空
    }
    xhr.open(type,url);
    //post请求并且有数据
    if(type=='post' && data){
        xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    }
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            success(xhr.responseText);
        }
    }
    xhr.send(data);
}

/**
 * 当我们只传递一个参数时
 * 用户传递的是一个对象 options
 * 传入对象 只要传入的参数名正确，顺序打乱也不存在问题
 * @param {any} options (键名有url,type,data,success)
 */
function ajax(options){
    var xhr = new XMLHttpRequest();
    //如果是get并且有数据
    if(options.type=='get' && options.data){
        options.url += '?';
        options.url += options.data;
        options.data = null;//如果是get方法不使用send(data)，这里让它为空
    }
    xhr.open(options.type,options.url);
    //post请求并且有数据
    if(options.type=='post' && options.data){
        xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    }
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
           options.success(xhr.responseText);
        }
    }
    xhr.send(options.data);
}
