
function ajax(options){
    var xhr = new XMLHttpRequest();
    if(options.type=='get'&&options.data){
        options.url += '?';
        options.url += options.data;
        options.data = null
    }
    xhr.open(options.type,options.url);
    if(options.type=='post'&&options.data){
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    }
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            var type = xhr.getResponseHeader('Content-Type');
            //返回的是JSON格式数据
            if(type.indexOf('json')!=-1){
                options.success(JSON.parse(xhr.responseText));
            }
            //返回的是XML格式数据
            else if(type.indexOf('xml')!=-1){
                options.success(xhr.responseXML);
            }
            //返回的是普通字符串
            else{
                options.success(xhr.responseText);
            }
        }
    }
    xhr.send(options.data);
}