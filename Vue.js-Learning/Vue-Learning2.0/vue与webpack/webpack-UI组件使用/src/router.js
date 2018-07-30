import VueRouter from 'vue-router'

import account from './account.vue'
import goodslist from './goodsList.vue'

//导入Account嵌套的子组件
import login from './login.vue'
import reg from './reg.vue'

let router  = new VueRouter({
    routes:[
        //account goodslist
        { 
            path: '/account', 
            component: account,
            children:[
               { path: 'login', component: login },
               { path: 'reg', component: reg }
            ]
        },
        { path: '/goodslist', component: goodslist}
    ]
})

// 向外暴露一个接口
export default router