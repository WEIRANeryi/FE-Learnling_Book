//发布emit 订阅on{} 模式
//实现一对多,多个事件(订阅)监控一个发布者

//vm中提供了方法:vm.$on,  vm.$once,   vm.$off,    vm.$emit
//例如on(绑定)和emit(触发)
//我们这里大致看一下原理

//举例,女生为发布者,把'失恋'当做发布的操作,绑定了很多事件(订阅)
//构造函数,创建一个发布者类
function Girl() {
    this._event = {};//创建的每个对象的绑定的都是私有的,不在原型链上
    //默认初始化一个空对象,存放后面来绑的事件
}

//每个创建的发布者都具有on和emit方法,所以放在原型上当做公有方法
Girl.prototype.on = function (eventName,callback) {
    if(this._event[eventName]){//true 在调用on方法绑定的时候,需要判断是不是第一次绑定,如果内容不为空则不是第一次,添加内容
        this._event[eventName].push(callback);
    }else {//否则,是第一次绑定,那么使他的eventName属性等于一个数组,数组的内容是绑定的回调函数
        this._event[eventName] = [callback];
    }
};

Girl.prototype.emit = function (eventName,...args) {
    // 我们需要传入第二参数,来表'示谁'执行了方法
    // 但若是传入的参数不止一个,那么我们需要除开第一个参数,拿到后面的所有参数,采用...运算符,转化为数组
    if(this._event[eventName]){//判断一下,对象中的eventName是否有方法,有的话再依次执行
        this._event[eventName].forEach(cb=>cb.apply(this,args));//传入的参数一次性拿到进行字符串拼接,apply方法警告!!!^_^,不要告诉我你忘了
        //其实这里用...args也是可以起到效果的
    }
};

//创建一个发布者(女生对象)
let girl = new Girl();

//创建方法
//添加参数who,来表示是谁'失恋'
let cry = (...who) => {console.log(who + '哭');};//使用...运算符转化
let shopping = (...who) => {console.log(who + '购物');};
let eat = (...who) => {console.log(who + '吃');};


//方法绑定到发布者上
girl.on('失恋',cry);//{'失恋':[cry]}
girl.on('失恋',shopping);//{'失恋':[cry,shopping]}
girl.on('失恋',eat);//{'失恋':[cry,shopping,eat]}

//进行发布
girl.emit('失恋','她','你');//输出的内容是订阅者的方法执行的结果