<template>
  <div class="attendance_box">
    <div class="outer_ring"></div>
    <div class="inner_circle"></div>
    <div class="inner_circle_33">上午考勤</div>
    <div class="dotted_line"></div>
    <div class="out_school">出校 <em>2506</em> 人</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
  @import '~@/assets/css/variables.less';

  .attendance_box{
    position: relative;
    min-height: 257px;

    .outer_ring{
      width: 369px;
      height: 178px;
      background: url('~@/assets/img/attendance_7.png') no-repeat ;
      position: absolute;
      top: 46px;
      margin-left: 240px;
    }

    .inner_circle{
      width: 320px;
      height: 180px;
      background: url('~@/assets/img/attendance_2.png') no-repeat ;
      position: absolute;
      top: 0;
      margin-left: 268px;
      z-index: 1;
    }

    .inner_circle_33{
      width: 220px;
      height: 128px;
      background: url('~@/assets/img/attendance_33.png') no-repeat ;
      position: absolute;
      top: 68px;
      margin-left: 312px;
      font-size: 20px;
      font-family: @Yahei;
      color: @font_122;
      text-align: center;
      line-height: 80px;
      z-index: 2;
    }

    .dotted_line{
      // width: 339px;
      // height: 163px;
      // background: url('~@/assets/img/attendance_2.png') no-repeat ;
      // width: 339px;height: 289px;border-radius: 50%;
      // border:5px solid #fff;
      // position: absolute;
      // top: 61px;
      // margin-left: 139px;
      width: 323px;
      height: 132px;
      border-radius: 50%;
      border: 10px dashed #00A5FF;
      position: absolute;
      top: 59px;
      margin-left: 253px;
    }

    .out_school{
      line-height: 32px;
      padding-right: 10px;
      border-bottom: 1px solid @br_00A;
      position: absolute;
      font-size: 16px;
      font-family: @Yahei;
      color: @font_e9f;
      em{
        font-size: 24px;
        font-family: @DINCondBlack;
        font-weight: 900;
        color: @font_31d;
      }
    }
  }
</style>
