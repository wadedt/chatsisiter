<template>
    <div>
        <head-simple :title="title" :isinner="isInner"></head-simple>
        <div class="scrollwrap">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <tab-bar @setTitle="changeTitle"></tab-bar>
    </div>
</template>
<script>
import HeadSimple from '@/components/head/headSimple'
import TabBar from '@/components/tab-bar/tab-bar'

export default {
    data(){
        return {
            title: '消息',
            isInner: true
        }
    },
    activated(){
        if(!localStorage.getItem('token')){
            this.$router.push({
                name: 'Login'
            })
        }
    },
    methods: {
        changeTitle(title){
            this.title = title
        }
    },
    components: {
        HeadSimple,
        TabBar
    }
    
}
</script>
<style lang="stylus" scoped>
    .scrollwrap
        position fixed
        padding-top 44px
        padding-bottom 60px
        height 100%
        width 100%
        z-index 1
        background #fff
</style>


