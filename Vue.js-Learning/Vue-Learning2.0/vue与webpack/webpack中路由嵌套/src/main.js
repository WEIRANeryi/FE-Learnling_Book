import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入mint-ui
import MintUI from 'mint-ui'
// 可以省略　node_modules这一层目录
import 'mint-ui/lib/style.css'
Vue.use(MintUI);//把所有的组件注册为全局的组件
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