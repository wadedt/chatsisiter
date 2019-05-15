<template>
  <div class="loading">
    <p class="desc">{{title}}</p>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: '正在载入...'
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .loading
    display: inline-block
    padding: 4vw 12vw
    background: rgba(0,0,0,0.65)
    text-align: center
    border-radius 2vw
    .desc
      line-height: 20px
      font-size: 14px
      color: #fff
</style>
