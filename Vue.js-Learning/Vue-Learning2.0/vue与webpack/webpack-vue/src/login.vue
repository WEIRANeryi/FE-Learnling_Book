<template>
    <h1>这是登录组件，使用.vue定义出来的---{{msg}}</h1>
</template>


<script>
    //通过export default来定义组件中的data等信息
    export default {
        data () {//组件中的data必须是function
            return {
                msg:123
            }
        },
        methods:{
            show(){
                console.log("调用了 login.vue　中的show方法");
            }
        }
    }
</script>

<style>

</style>
