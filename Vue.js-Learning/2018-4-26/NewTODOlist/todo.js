let vm =new Vue({
    directives:{
        focus(el,bindings){
            //当点击当前li时，让内部的输入框获取焦点
            if(bindings.value){
                el.focus();//获取焦点
            }
        }
    },
    el:'#app',
    data:{
       todos:[
           {isSelected:false,title:'睡觉'},
           {isSelected:false,title:'吃饭'},
       ],
        title:'',
        cur:'',
        hash:''
    },
    created(){//ajax获取localStorage中的数据并初始化
        //使用||的原因：如果localStorage中有存储的数据就使用存储的数据，没有的话就使用默认数据，
        //因为没存的话 内容是null，使用JSON.parse方法会转为null，隐式转化为false，则获取||后的默认数据
        this.todos = JSON.parse(localStorage.getItem('data'))||this.todos;


        //监控哈希值的变化,如果页面已经有哈希了，重新刷新页面也要获取一下哈希值
        this.hash = window.location.hash.slice(2)||'all';//如果没有哈希值就赋值all
        window.addEventListener('hashchange',() => {
            //与页面跳转有关的都在location中，我们打印出来看看,发现其中有我们想要的哈希值
            console.log(window.location);
            //当哈希值变化重新给hash赋值,如果哈希值为空,那么就赋值all
            this.hash = window.location.hash.slice(2)||'all';
        },false);
    },
    watch:{
        todos:{//watch默认只监控一层的数据变化，如果把todos写成方法，那么只会检测到todos的变化，而todos里面的值的变化则不会被检测到
            handler(){//默认写成函数,就相当于就相当于默认写了个handler,显示的写出来，并且是深度监控为真
                // alert();//这一项是为了查看所有改动是否都被watch到
                //localStorage默认存的是字符串
                localStorage.setItem('data',JSON.stringify(this.todos));//把todos以JSON的格式存起来，再转为字符串
            },deep:true

        }
    },
    methods:{
       add(){
           this.todos.push({
               isSelected:false,
               title:this.title
           })
       },
        remove(todo){
           this.todos = this.todos.filter((item) => item !== todo);
        },

        a(todo){//a方法绑定的是双击事件，传递的是当前的双击的这一项
           this.cur = todo;//cur存储了当前点击的某一项，以便和循环的项比较是否相等
        },

        c(){
            this.cur='';
        }
    },
    computed: {
        count() {
            // 初期想法
            // this.todos = this.todos.filter(item => item.isSelected == false);
            // return this.todos.length;

            //优化后的
            return this.todos.filter(item => !item.isSelected).length;
        },

        filterTodos(){
            if(this.hash === 'all') return this.todos;
            if(this.hash === 'finish') return this.todos = this.todos.filter(item => item.isSelected);
            if(this.hash ==='unfinish') return this.todos === this.todos.filter(item => !item.isSelected);

            return this.todos;//防止哈希值不是上面三种情况
        }

    }
});
//将数据循环到页面上
//敲回车时添加新数据(同时加入isSelected属性)
//删除功能
//计算当前isSelected值为false的个数，即为没被选中的个数



console.log("%c", "padding:50px 300px;height:1000px;background:url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524851546069&di=cfbf4239b0db533114adb6e77f42392a&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161223%2F58f6999fed674bd8817161465aa7a7b3.gif') no-repeat;");
console.log("保佑框架不再崩了");
console.log("保佑方法不要失效了");