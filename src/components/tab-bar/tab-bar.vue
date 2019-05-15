<template>
    <div class="tab">
        <router-link tag="div" class="tab-item tab1" to="/home/chat" @click.native="selectTab('消息')">
            <i class="iconfont icon-iconfontzhizuobiaozhun023110"></i>
            <span class="tab-link">消息</span>
        </router-link>
        <router-link tag="div" class="tab-item tab2" to="/home/contact" @click.native="selectTab('联系人')">
            <i class="iconfont icon-tongxunlu"></i>
            <span class="tab-link">联系人</span>
        </router-link>
        <router-link tag="div" class="tab-item tab3" to="/home/find" @click.native="selectTab('发现')">
            <i class="iconfont icon-faxian"></i>
            <span class="tab-link">发现</span>
        </router-link>
        <router-link tag="div" class="tab-item tab4" to="/home/my" @click.native="selectTab('我')">
            <i class="iconfont icon-wo"></i>
            <span class="tab-link">我</span>
        </router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        selectTab(title){
            this.$emit('setTitle',title)
        }
    }    
}
</script>
<style lang="stylus" scoped>
  .tab
    display: flex
    -webkit-box-align: center
    align-items: center
    position: fixed
    left: 0
    bottom: 0
    z-index: 180
    width: 100%
    height: 60px
    background: #fff
    border-top:1px solid #eee
    .tab-item
        -webkit-box-flex: 1
        -ms-flex: 1
        flex: 1
        text-align: center
        img 
            height:20px
            line-height:24px
            display: inline
            text-align: center
        .tab-link
            display: block
            color: #000
            font-size: 14px;
        .iconfont
            display: inline-block
            width: 100%
            height: 24px
            font-size 20px
        .iconfont,.tab-link
            color #999
        &.router-link-active
            .iconfont,.tab-link
                color: #44aae8
</style>


