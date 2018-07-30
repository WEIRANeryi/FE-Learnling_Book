
//includes
let arr3 = [1,2,3,4,55];
console.log(arr3.includes(5));

//find:返回找到的那一项
let  result = arr3.find(function (item,index) {
   return item.toString().indexOf(5)>-1;
});
console.log(result);

//some和every
let  result2 = arr3.some(function (item,index) {
    return item.toString().indexOf(5)>-1;
});
console.log(result2);