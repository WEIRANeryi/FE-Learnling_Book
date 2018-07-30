$(function(){
    $('button').click(function(){
        //创建自己的聊天框
        var cloneSlef = $('.me').first().clone();
        //添加到容器中
        $('.chatDiv-top').append(cloneSlef);
        cloneSlef.show();
        //获取输入框的内容，设置给输入元素
        cloneSlef.find('p').html($('#kuang').val());
        //ajax请求部分
        //创建异步对象
        var xhr = new XMLHttpRequest;
        //请求行的书写
        xhr.open('post','http://www.tuling123.com/openapi/api');
        //设置请求头
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        //执行回调函数
        xhr.onreadystatechange  = function(){
            //判断状态码为4 且请求页面成功
            if(xhr.readyState == 4&&xhr.status == 200){
                var cloneRobot =  $('.robot').first().clone();
                $('.chatDiv-top').append(cloneRobot);
                var yuyan = xhr.responseText.split('"').reverse();
                cloneRobot.find('p').html(yuyan[1]);
                //清空框内内容并使它成为浏览器焦点以便再次输入
                $("#kuang").val("").focus();
            }
        }
        //请求主体发送
        xhr.send('key=b9dc4e97f1d441128c8af8fb7d676906&info='+$('#kuang').val());
    })
})