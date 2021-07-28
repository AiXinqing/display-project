<template>
  <div>123</div>
</template>

<script>
export default {
  data () {
    return {
      height: document.body.clientHeight
    }
  },
  mounted () {
    this.height = document.body.offsetHeight + 30
  }
}
</script>

<style lang="less">

</style>
