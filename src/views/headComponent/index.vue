<template>
  <div class="top-header">
    <div class="top-header-box">
      <div class="header-left">
        <div class="scroll-tag" v-if="tagIs">
          <span>正在播放</span>
          <span>(<em>{{tagNum}}</em>/{{tagTotal}})</span>
          <svg-oval class="svg-oval"/>
          <svg-rectangle class="svg-rectangle"/>
        </div>
      </div>
      <div class="header-center">{{title}}</div>
      <div class="header-right">
        <div v-html="timeDisplayArea" class="now_data" />
      </div>
    </div>
    <div class="heade_line">
      <div class="line_left"></div>
      <div class="line_center"></div>
      <div class="line_right"></div>
    </div>
    <!-- <heade-line/> -->
  </div>
</template>

<script>
import svgRectangle from '../svgIcon/rectangle'
import svgOval from '../svgIcon/oval.vue'
// import headeLine from '../svgIcon/headeLine'
export default {
  components: {
    svgRectangle,
    svgOval
    // headeLine
  },
  props: {
    title: {
      type: String,
      default: '成都市第七中学大数据中心'
    },

    tagIs: {
      type: Boolean,
      default: true
    },

    tagNum: {
      type: Number,
      default: 1
    },

    tagTotal: {
      type: Number,
      default: 3
    }
  },

  data () {
    return {
      nowDate: '', // 当前日期
      currTime: new Date() // 当前日期对象
    }
  },

  computed: {
    timeDisplayArea () { // 时间展示区
      const date = new Date()
      const year = date.getFullYear() // 年
      const month = date.getMonth() + 1 // 月
      const day = date.getDate() // 日
      const hours = this.currTime.getHours() > 9 ? this.currTime.getHours() : ('0' + this.currTime.getHours())
      const minutes = this.currTime.getMinutes() > 9 ? this.currTime.getMinutes() : ('0' + this.currTime.getMinutes())
      const seconds = this.currTime.getSeconds() > 9 ? this.currTime.getSeconds() : ('0' + this.currTime.getSeconds())
      const week = date.getDay() // 星期
      const weekArr = ['日', '一', '二', '三', '四', '五', '六']
      return `<span>${year}</span>年<span>${month}</span>月<span>${day}</span>日<span>${hours}:</span><span>${minutes}:</span><span style="margin-right:5px">${seconds}</span>星期<span>${weekArr[week]}</span>`
    }
  },

  created () {
    this.currTime = new Date()
    clearInterval(this.updateTimer)
    this.updateTimer = setInterval(() => {
      this.currTime = new Date()
    }, 1000)
  }
}
</script>

<style lang="less">
  @import '~@/assets/css/variables.less';
  .top-header-box{
    width: cacl(100% - 70px);
    height: 84px;
    display: flex;
    line-height: 84px;
    color: @white;
    padding: 0 35px;

    .header-left{
      width: 30%;
      font-size: 18px;
      font-family: @Yahei;
      color: #E9F1FC;
      line-height: 24px;
      letter-spacing: 1px;

      em{
        font-weight: bold;
        color: @headeHighlight;
      }

      .svg-oval{
        margin-left: 7px;
        position: relative;
        top: 4px;
      }
      .svg-rectangle{
        margin-left: 7px;
        position: relative;
        top: 15px;
      }
    }
    .header-center{
      width: 40%;
      text-align: center;
      font-size: 40px;
      font-family: @MicrosoftYaHeiBold;
      font-weight: bold;
      color: @headeC;
    }
    .header-right{
      width: 30%;
      text-align: right;
      font-size: 24px;
      font-family: @DINCondBlack;
      font-weight: 900;

      span{
        color: @headeHighlight;
      }
    }
  }
  .heade_line{
    width: 100%;
    height: 17px;
    background: url('~@/assets/img/headL.png') no-repeat;
    position: relative;

    .line_left,
    .line_right{
      position: absolute;
      width: 151px;
      height: 9px;
      background: url('~@/assets/img/headLl.png') no-repeat;
      top: -3px;
    }

    .line_left{
      left: 32%;
      animation-name: lineLCexample;
      animation-duration: 2.5s;
      animation-iteration-count: infinite;
    }

    @keyframes lineLCexample {
      0% {left: 0%;}
      50% {left: 0%;width:32%;background-size: 100% 100%;}
      100% {left: 26%;background-size: 100% 100%;width: 7%;}
    }

    .line_center{
      width: 344px;
      height: 19px;
      position: absolute;
      left: 34%;
      background: url('~@/assets/img/headeC.png') no-repeat;
      top: 7px;
      animation-name: lineCexample;
      animation-duration: 2.5s;
      animation-iteration-count: infinite;
    }

    @keyframes lineCexample {
      0%   {left: 33%;}
      50%  {width: 22%;background-size: 100% 100%;}
      100%  {left: 48%;}
    }

    .line_right{
      left: 90%;
      animation-name: lineLRCexample;
      animation-duration: 2.5s;
      animation-iteration-count: infinite;
    }

    @keyframes lineLRCexample {
      0%   {left: 67%;}
      50%  {width: 34%;background-size: 100% 100%;left: 66%;}
      100%  {width: 7%;background-size: 100% 100%;left: 92%}
    }

  }
</style>
