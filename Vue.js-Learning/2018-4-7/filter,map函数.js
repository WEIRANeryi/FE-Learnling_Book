//如果非要拿for of遍历对象
let obj = {school:"Aqing",age:19};//Object.keys()将对象的key作为新的数组,这里数组的内容就是school和age
for(let val of Object.keys(obj)){
    console.log(val);
    console.log(obj[val]);
}

//filter
let newAry = [1,2,3,4,5].filter(function (item) {
    return item>2&&item<5;
});
console.log(newAry);
let arr1 = [1,2,3].map(function (item) {
    return `<li>${item}</li>`
});
console.log(arr1.join(''));