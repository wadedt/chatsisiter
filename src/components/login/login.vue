<template>
    <div>
        <div class="login">
            <div class="title">聊你妹</div>
            <div class="wrapper">
                <div class="avatar">
                    <img :src="avatar">
                </div>
                <div class="ipt-group">
                    <i></i>
                    <input type="text" v-model="mobile" placeholder="手机号">
                </div>
                <div class="ipt-group">
                    <i></i>
                    <input type="password" v-model="pwd" placeholder="密码">
                </div>
                <div class="submit-wrappepr">
                    <span class="submit">登录</span>
                </div>
            </div>
            <div class="toregister">
                没有账号去<span @click="toreg" class="register">注册</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            mobile: '',
            pwd: '',
            avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557124037&di=d3f0103ee652627e6ddee934c9a79801&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201705%2F06%2F20170506155406_2yuUk.thumb.700_0.jpeg'
        }
    },
    methods: {
        toreg(){
            this.$router.push({
                name: 'Register'
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
    .login
        position fixed
        top 0
        bottom 0
        left 0
        right 0
        width 100%
        height 100%
        background #44aae8
        .title
            font-size 8vw
            line-height 12vw
            text-align center
            margin-top 60px
            color #fff
        .wrapper
            position fixed
            top 40vw
            left 15vw
            width 70vw
            padding 5vw
            border 0.5vw solid #0c77b8
            border-radius 2vw
            background rgba(255,255,255,0.3)
            .avatar
                border-radius 50%
                width 60px
                height 60px
                overflow hidden
                margin 0 auto
                margin-bottom 28px
                img 
                    height 100%
                    width 100%
            .ipt-group
                border-bottom 0.4vw solid #64b5e7
                input 
                    background transparent
                    width 100%
                    line-height 12vw
                    border none
                    color #fff
                    &:focus
                        outline none
                input:-webkit-autofill , textarea:-webkit-autofill, select:-webkit-autofill
                    -webkit-text-fill-color: #ededed !important;
                    -webkit-box-shadow: 0 0 0px 1000px transparent  inset !important;
                    background-color:transparent;
                    background-image: none;
                    transition: background-color 50000s ease-in-out 0s; //背景色透明  生效时长  过渡效果  启用时延迟的时间
                input::-webkit-input-placeholder
                    color #fff
            .submit-wrappepr
                margin-top 4vw
                text-align center
                .submit
                    color #ffffff
                    display inline-block
                    padding 8px 20px
                    background #44aae8
                    border-radius 1vw
                    font-size 3.6vw
        .toregister
            position fixed
            text-align center
            top 116vw
            color #fff
            width 100%
            font-size 3.4vw
            .register
                color #ee9043
        

</style>


