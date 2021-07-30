<template>
  <div class="slide-item">
    <head-component/>
    <digital-flop/>
    <charts-content/>
  </div>
</template>

<script>
import headComponent from '../headComponent'
import digitalFlop from './home/digitalFlop'
import chartsContent from './home/chartsContent'
export default {
  components: {
    headComponent,
    digitalFlop,
    chartsContent
  }
}
</script>

<style lang="less">
  @import '~@/assets/css/variables.less';
</style>
