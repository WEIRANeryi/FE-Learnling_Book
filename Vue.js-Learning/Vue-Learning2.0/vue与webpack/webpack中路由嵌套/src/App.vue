<template>
    <div>
        <h1>这是h1组件</h1>
        <mt-button type="default" @click="show">default</mt-button>
        <mt-button type="primary" size="small">primary</mt-button>
        <mt-button type="danger">danger</mt-button>
        <router-link to="/account">Account</router-link>
        <router-link to="/goodslist">Goodslist</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';//按需导入功能组件
export default {
    data () {
        return {
            
        }
    },
    methods:{
        show(){
            Toast({
                message:'修改后的信息',
                position:'top',
                duration:1000
            });
        }
    }
}
</script>


<style>

</style>

