<template>
  <div class="charts_content">
    <div class="charts-left">
      <div class="svg_icon_irr">师资力量</div>
      <charts-bullet/>
      <charts-histogram/>
    </div>
    <div class="charts-center">
      <div class="charts-center-title">
        <span class="icon"></span>
        <span class="text">学生出勤统计</span>
        <span class="icon"></span>
      </div>
      <charts-center/>
    </div>
    <div class="charts-right">
      <div class="svg_icon_irr">学生情况</div>
    </div>
  </div>
</template>

<script>
// import svgIrregular from '../../svgIcon/irregular'
import chartsBullet from './chartsLeft/bullet'
import chartsHistogram from './chartsLeft/histogram'
import chartsCenter from './chartsCenter'
export default {
  components: {
    // svgIrregular
    chartsBullet,
    chartsHistogram,
    chartsCenter
  }
}
</script>

<style lang="less">
  @import '~@/assets/css/variables.less';
  .charts_content{
    display: flex;
    width: calc(100% - 70px);
    padding: 0 35px;
    height: 100%;
    margin-top: 33px;
    >div{
      height: 100%;
    }

    .charts-left{
      min-width: 496px;
      min-height: 791px;
      width: 30%;
      background: url('~@/assets/img/borderL.png') no-repeat;
      position: relative;
      // padding: 0 20px;
    }

    .charts-center{
      width: 100%;
    }

    .charts-right{
      min-width: 496px;
      min-height: 791px;
      width: 30%;
      background: url('~@/assets/img/borderR.png') no-repeat;
      position: relative;
    }

    .svg_icon_irr{
      position: relative;
      left: 50%;
      margin-left: -73.5px;
      width: 147px;
      height: 42px;
      top:-18px;
      background: url('~@/assets/img/irregular.png') no-repeat;
      font-size: 20px;
      font-family: @MicrosoftYaHeiBold;
      font-weight: bold;
      color: @irrC;
      text-align: center;
      line-height: 42px;
    }
  }
  .charts-center-title{
    text-align: center;
    font-size: 20px;
    font-family: @MicrosoftYaHeiBold;
    font-weight: bold;
    color: @irrC;

    span{
      &.icon{
        display: inline-block;
        width: 46px;
        height: 11px;
        background: url('~@/assets/img/attendance_3.png') no-repeat;
      }
      &.text{
        margin: 0 10px;
      }
    }
  }
</style>
