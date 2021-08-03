<template>
  <div class="progress_item">
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
      ></div>
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
  .progress_item{
    display: flex;
    line-height: 30px;

    .progress_name,
    .progress_num{
      width: 120px;
    }

    .progress_name{
      text-align: right;
      font-size: 14px;
      font-family: @MicrosoftYaHeiBold;
      font-weight: bold;
      color: @irrC;
    }

    .progress_line_box{
      width: 100%;
      height: 10px;
      margin: 0 10px;
      margin-top: 9px;
      border:1px solid #fff;

      .line_box{
        height: 100%;
        width: 80%;
        background: red
      }
    }

    .progress_num{
      font-size: 16px;
      font-family: @MicrosoftYaHeiBold;
      font-weight: bold;
      color: @irrC;
    }
  }
</style>
