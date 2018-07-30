//filter方法：过滤器
//在一个数组中删除偶数留下奇数
let arr1 = [1,2,3,4,5,6];
arr1 = arr1.filter(function(item){
    return item%2 !=0;
});
console.log(arr1);
//删除数组中的空字符
let arr2 = ['a','','b','','c'];
arr2 = arr2.filter(function(item){
    return item!=='';
});
console.log(arr2);
//filter()接收的回调函数，其实可以有多个参数。通常我们仅使用第一个参数，表示Array的某个元素。回调函数还可以接收另外两个参数，表示元素的位置和数组本身：
let arr3 = ['A','B','C'];
arr3.filter(function(item,index,self){
    console.log(item);
    console.log(index);
    console.log(self);
    return true;
});
//利用filter可以做到数组去重
//去除重复元素依靠的是indexOf总是返回第一个元素的位置，后续的重复元素位置与indexOf返回的位置不相等，因此被filter滤掉了。
let m,
    arr4 = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
m = arr4.filter(function (element, index, self) {
    return self.indexOf(element) === index;
});
console.log(m.toString());

//尝试用filter()筛选出素数：
function get_primes(arr) {
    let i;
    return arr.filter(function (element) {
        let flag=true;
        if(element<2){
            flag=false;
        }else {
            for(let i=2;i<element;i++){
                if (element%i==0){
                    flag=false;
                    break;
                }
            }
        }
        return flag;
    });
}

// 测试:
let x;
let arr = [];
for (x = 1; x < 100; x++) {
    arr.push(x);
}
let r = get_primes(arr);
if (r.toString() === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97].toString()) {
    console.log('测试通过!');
} else {
    console.log('测试失败: ' + r.toString());
}