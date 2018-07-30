
let  arr = [1,2,3,4,5];

arr.reduce(function (prev,next,index,item) {
   console.log(arguments);
   return 100;
});

let sum = arr.reduce(function (prev,next,index,item) {
   return prev+next;
});
console.log(sum);