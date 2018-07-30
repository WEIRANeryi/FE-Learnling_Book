<?php
    //JSON也要设置一段内容(可选)
    //告诉浏览器 返回的是 JSON格式的对象 编码是UTF-8
    header('content-type:application/json;charset=utf-8');
    //读取JSON文件
    $jsonString = file_get_contents('data/stars.json');
    //返回读取内容
    echo $jsonString;
?>