<template>
  <div class="attendance_box">
    <div class="outer_ring"></div>
    <div class="inner_circle"></div>
    <div class="inner_circle_33">上午考勤</div>
    <div class="dotted_line"></div>
    <div class="out_school data_item">
      <a>出校 <em>2506</em> 人</a>
    </div>
    <div class="leave_early data_item">
      <a>早退 <em>2506</em> 人</a>
    </div>
    <div class="enter_school data_item">
      <a>进校 <em>2506</em> 人</a>
    </div>
    <div class="be_late data_item">
      <a>迟到 <em>2506</em> 人</a>
    </div>
    <div class="ask_leave data_item">
      <span>请假 <em>125</em> 人</span>
    </div>
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
      background: url('~@/assets/img/attendance_7.png') no-repeat ; //transition
      position: absolute;
      top: 46px;
      margin-left: 240px;
      animation-name: transitionIng;
      animation-duration: 3s;
      animation-iteration-count: infinite;
    }

    @keyframes transitionIng {
      0%{opacity: 1}
      50%{opacity: 0.3;}
      100%{opacity: 1}
      100%{opacity: 0.5}
    }

    .inner_circle{
      width: 320px;
      height: 180px;
      background: url('~@/assets/img/attendance_2.png') no-repeat ;
      background-size: 100% 100%;
      position: absolute;
      top: 0;
      margin-left: 268px;
      z-index: 1;
      animation-name: variety;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }

    @keyframes variety {
      0%{height: 24px;top: 156px;opacity: 0.5;}
      50%  {height: 180px;top: 0;opacity: 1;}
      75%  {height: 180px;top: 0;opacity: 1;}
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
      width: 320px;
      height: 142px;
      border-radius: 50%;
      border: 8px dashed @bc_7cc;
      position: absolute;
      top: 56px;
      margin-left: 254px;
      animation-name: transitionLine;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }

    @keyframes transitionLine {
      0%   {opacity: 1}
      50%  {opacity: 0.3}
      100%  {opacity: 1}
      100%  {opacity: 0.5}
    }

    .data_item{
      //border-bottom: 1px solid @br_00A;
      position: absolute;
      font-size: 16px;
      font-family: @Yahei;
      color: @font_e9f;
      width: 30%;
      >a{
        min-width: 80px;
        line-height: 35px;
        display: inline-block;
        border-bottom: 1px solid @br_00A;
        padding-right: 10px;
      }

      &::before{
        border-top: 1px solid @br_00A;
        content: ' ';
        display: inline-block;
        position: absolute;
      }

      &::after{
        width: 8px;
        height: 8px;
        background: @br_00A;
        content: '';
        display: inline-block;
        position: absolute;
        border-radius: 50%;
      }

      em{
        font-size: 24px;
        font-family: @DINCondBlack;
        font-weight: 900;
        color: @font_31d;
      }

      &.out_school{
        left: 20px;
        direction: rtl;
        top: 15px;

        &::before{
          transform: rotate(24deg);
          width: 25px;
          right: -24px;
          bottom: -5px;
        }

        &::after{
          bottom: -15px;
          right: -30px;
        }

        em{
          color: @font_F65;
        }
      }

      &.leave_early{
        left: 68%;
        top: 24px;
        &::before{
          transform: rotate(-25deg);
          width: 25px;
          left: -24px;
          bottom: -5px;
        }

        &::after{
          bottom: -14px;
          left: -28px;
        }

        em{
          color: @headeHighlight;
        }
      }

      &.enter_school{
        left: -1.6%;
        bottom: 89px;
        direction: rtl;
        &::before{
          transform: rotate(23deg);
          width: 17px;
          right: -15px;
          bottom: -3px;
        }

        &::after{
          bottom: -10px;
          right: -7%;
        }
      }

      &.be_late{
        left: 71%;
        bottom: 89px;
        &::before{
          transform: rotate(-25deg);
          width: 25px;
          left: -24px;
          bottom: -5px;
        }

        &::after{
          bottom: -14px;
          left: -28px;
        }

        a{text-indent: 0.5em;}

        em{
          color: @font_F0c;
        }
      }

      &.ask_leave{
        left: 34%;
        text-align: center;
        bottom: -2px;
        &::after{
          bottom: 32px;
          left: 51%;
        }
        em{
          color: @white;
        }
      }

    }
  }
</style>
