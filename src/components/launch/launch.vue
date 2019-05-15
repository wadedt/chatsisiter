<template>
    <div>
        <div class="launch">
            
        </div>
    </div>
</template>
<script>
export default {
    created(){
        let user = localStorage.getItem('token');
        setTimeout(() => {
            if(user){//如果是登录状态
                this.$router.push({
                    name: 'Home'
                })
            }else{
                this.$router.push({
                    name: 'Login'
                })
            }
        },3000)
    },
    activated(){
        let user = localStorage.getItem('token');
        setTimeout(() => {
            if(user){//如果是登录状态
                this.$router.push({
                    name: 'Home'
                })
            }else{
                this.$router.push({
                    name: 'Login'
                })
            }
        },3000)
    }
}
</script>
<style lang="stylus" scoped>
    .launch
        position fixed
        top 0
        bottom 0
        left 0
        right 0
        width 100%
        height 100%
        background url('~./launch.jpg') center center no-repeat
        background-size cover
</style>


