let arr = [1,2,3,4,5];
arr.b="100";
for(let i=0;i<arr.length;i++){//编程式
    console.log(arr[i]);
}

//forEach不支持return，不管写不写return都会执行完
arr.forEach(function (item) {//声明式，不关心如何实现，
    console.log(item);
});

//key会变成字符串类型
//而for in连私有属性都可以打出来，b
for(let key in arr){
    console.log(key);
    console.log(arr[key]);
}

for(let val of arr){//支持return，并且是值of数组（不能遍历对象）
    console.log(val);
}
