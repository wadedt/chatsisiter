<template>
    <div>
        <head-simple :title="title"></head-simple>
        <div class="login">
            <div class="title">聊你妹</div>
            <div class="wrapper">
                <div class="avatar">
                    <img :src="avatar">
                </div>
                <div class="ipt-group">
                    <i class="iconfont icon-mobile"></i>
                    <input type="text" v-model="mobile" placeholder="手机号">
                </div>
                <div class="ipt-group">
                    <i class="iconfont icon-ziyuanxhdpi"></i>
                    <input type="password" v-model="pwd" placeholder="密码">
                </div>
                <div class="submit-wrappepr">
                    <span class="submit" @click="login">登录</span>
                </div>
            </div>
            <div class="toregister">
                没有账号去<span @click="toreg" class="register">注册</span>
            </div>
            <div class="loading-container" v-show="submitFlag">
                <toast :title="toastMsg"></toast>
            </div>
        </div>
    </div>
</template>
<script>
import HeadSimple from '@/components/head/headSimple'
import Toast from '@/base/toast/toast'
import {loginAction} from '@/api/user'

export default {
    data() {
        return{
            title: '登录',
            mobile: '',
            pwd: '',
            submitFlag: false,
            toastMsg: '登录中，请稍后',
            avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557124037&di=d3f0103ee652627e6ddee934c9a79801&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201705%2F06%2F20170506155406_2yuUk.thumb.700_0.jpeg'
        }
    },
    activated: function () {
        this.$setgoindex()
        if(localStorage.getItem('token')){
            this.$router.push({
                name: 'Home'
            })
        }
        this.mobile = ''
        this.pwd = ''
    },
    methods: {
        toreg(){
            this.$router.push({
                name: 'Register'
            })
        },
        login(){
            if(this.mobile.length!=11){
                this._showToast('手机号码格式不正确')
                return
            }
            if(!(this.pwd.length>=6 && this.pwd.length<=12)){
                this._showToast('密码格式不正确')
                return
            }
            if(!this.submitFlag && this.mobile && this.pwd){
                this._showToast('登录中，请稍后',false)
                this._login()
            }
        },
        _login(){
            loginAction(this.mobile,this.pwd).then((res) => {
                let redirect = ''
                if(res.ERR_CODE == 0){
                    redirect = 'Home'
                }
                if(res.token){
                    localStorage.setItem('token', res.token);
                }
                this._showToast(res.msg,true,redirect)
            }).catch(() => {
                this._showToast('网络出错')
            })
        },
        _showToast(msg,next=true,redirect=''){//msg提示信息。next是否一秒后消失。redirect提示信息消失后重定向地址,传router配置对应的name值
            this.toastMsg = msg
            this.submitFlag = true
            if(next){
                setTimeout(()=> {
                    this.submitFlag = false
                    if(redirect){
                        this.$router.push({
                            name: redirect
                        })
                    }
                },3000)
            }
        }
    },
    components: {
        HeadSimple,
        Toast
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
                position relative
                margin-bottom 4vw
                i
                    line-height 10vw
                    position absolute
                    bottom 0
                    width 10vw
                    text-align center
                    color #31436b
                    &.icon-mobile
                        font-size 22px
                input 
                    background transparent
                    width 100%
                    line-height 10vw
                    padding-left 12vw
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
        .loading-container
            position: absolute
            width: 100%
            top: 50%
            transform: translateY(-50%)
            text-align center
        

</style>


