<template>
  <div class="circular_box">
    <div class="circular_name">{{circular.name}}</div>
    <div :id="circular.id" class="circular_style"></div>
    <div class="circular_num">{{circular.num}}<em>{{circular.unit}}</em></div>
  </div>
</template>

<script>
import { RingProgress } from '@antv/g2plot'
export default {
  props: {
    circular: {
      type: Object,
      default: () => {}
    }
  },
  mounted () {
    if (this.circular.color !== undefined) {
      const { color, colorB, percent, id } = this.circular
      const ringProgress = new RingProgress(id, {
        height: 100,
        width: 100,
        autoFit: false,
        percent: percent,
        color: [color, colorB],
        statistic: {
          content: {
            style: {
              color: color,
              fontSize: '20px',
              fontFamily: 'MicrosoftYaHei-Bold, MicrosoftYaHei;',
              fontWeight: 'bold'
            }
          }
        }
      })

      ringProgress.render()
    }
  }
}
</script>

<style lang="less">
  @import '~@/assets/css/variables.less';
  // .circular_box{
  //   width: 120px;
  // }
  .circular_name{
    font-size: 16px;
    font-family: @MicrosoftYaHeiBold;
    font-weight: bold;
    color: @irrC;
    margin-bottom: 5px;
    text-align: center;
  }
  .circular_num{
    font-size: 22px;
    font-family: @MicrosoftYaHeiBold;
    font-weight: bold;
    color: @irrC;
    text-align: center;
    margin-top: 5px;
    em{
      font-size: 14px;
    }
  }
  .circular_style{
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
