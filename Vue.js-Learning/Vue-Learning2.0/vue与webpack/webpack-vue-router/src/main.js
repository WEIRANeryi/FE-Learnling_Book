import Vue from 'vue'
import VueRouter from 'vue-router'//1.导入vue-router 包
//2.手动安装VueRouter
Vue.use(VueRouter);

import app from './App.vue'//导入app组件

//3.创建一个路由对象,同时导入组件
import account from './account.vue'
import goodslist from './goodsList.vue'

let router  = new VueRouter({
    routes:[
        //account goodslist
        { path: '/account', component: account},
        { path: '/goodslist', component: goodslist}
    ]
})

let vm = new Vue({
    el:'#app',
    data:{
        msg:123
    },
    render: function(createElement){//render会用app把el替代，所以不能把子组件直接写在el所控制的元素中
        return createElement(app);//而是应该写在app组件中
    },
    router
})

//注意　app这个组件是通过vm实例的render函数渲染出来的，render函数如果要渲染组件，渲染出来的组件只能放到el:'#app'所指定的元素中去
//Account 和　Goodslist组件是通过路由匹配监听到的，所以这两个组件只能展示到属于路由的<router-view></router-view>中去