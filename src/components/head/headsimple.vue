<template>
    <div class="header">
        <i @click="back" class="back iconfont icon-fanhui" v-show="!isinner"></i>
        <span>{{title}}</span>
        <i @click="addContact" class="iconfont icon-tianjia" v-show="isinner"></i>
    </div>
</template>
<script>
import {websiteName} from '@/common/config'

export default {
    props: {
        title: {
            type: String,
            default: websiteName
        },
        isinner: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        back(){
            if (this.$route.query.goindex === 'true') {
                this.$router.push('/home')
            } else {
                this.$router.back(-1)
            }
        },
        addContact(){

        }
    }
}
</script>
<style lang="stylus" scoped>
    .header
        height 44px
        width 100%
        text-align center
        position fixed
        z-index 999
        line-height 44px
        color #fff
        background #44aae8
        border-bottom 1px solid #1897e4
        font-size 14px
        top 0
        left 0
        .back
            position fixed
            top 0
            left 0
            height 44px
            width 44px
            display inline-block
            line-height 44px
            text-align color
            font-size 20px
        .icon-tianjia
            position fixed
            top 0
            right 0
            height 44px
            width 44px
            display inline-block
            line-height 44px
            text-align color
            font-size 16px
</style>

