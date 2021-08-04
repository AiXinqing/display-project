<template>
  <div class="progress_item label_progress">
    <div class="progress_name">{{progress.name}}</div>
    <div class="progress_line_box"
      :style="{
        'border-color':progress.borderColor,
      }"
    >
      <div class="line_box"
        :style="{
          'width':progress.percentage,
          'background':progress.color,
          'background-image':progress.color,
        }"
      />
      <div class="percent"
        v-if="parseInt(progress.percentage) >= 90"
        style="left:88%"
      >{{progress.percentage}}</div>
      <div class="percent"
        v-else
        :style="{'left':progress.percentage}"
      >{{progress.percentage}}</div>
    </div>
    <div class="progress_num">{{progress.num}}{{progress.unit}}</div>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="less">
  @import '~@/assets/css/variables.less';
  .progress_item {
    &.label_progress{
      line-height:42px;
      .progress_line_box{
        height: 22px;
        position:relative;

        .percent{
          line-height:24px;
          font-size: 14px;
          margin-left:5px;
          position: absolute;
          top: 0;
          margin-left:5px;
        }
      }
      .progress_num{
        text-align: right;
      }
    }
  }
</style>
