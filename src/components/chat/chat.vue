<template>
    <div class="chat-wrap">
        <scroll :data="chatLists" class="lists-scroll">
            <div>
                <p>111</p>
            </div>
        </scroll>
    </div>
</template>
<script>
import Scroll from '@/base/scroll/scroll'

export default {
    data(){
        return {
            chatLists: []
        }
    },
    components: {
        Scroll
    }
}
</script>
<style lang="stylus" scoped>
    .chat-wrap
        position: fixed
        width: 100%
        top: 44px
        bottom: 61px
        .lists-scroll
            height: 100%
            overflow hidden
</style>

