import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
import app from './App.vue'//导入app组件

import router from './router.js'

let vm = new Vue({
    el:'#app',
    data:{
        msg:123
    },
    render: function(createElement){
        return createElement(app);
    },
    router
})