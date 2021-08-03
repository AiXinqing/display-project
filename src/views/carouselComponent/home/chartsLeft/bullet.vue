<template>
  <div class="charts_box">
    <div class="charts_title">
      <div class="h3">教师职称人数分布</div>
      <div class="h4">PROFESSIONAL TITLE FOR TEACHERS</div>
    </div>
    <div class="progress_box"
      v-for="item in progressList"
      :key="item.id"
    >
      <vueProgress
        :progress="item"
      />
    </div>
    <!-- <div id="container" style="height:220px;width:calc(100% - 40px)"></div> -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {

  },

  data () {
    return {
      progressList: [
        {
          name: '中学一级',
          percentage: '80%',
          num: '190',
          unit: '人',
          color: 'linear-gradient(90deg, #F66E4B 0%, #F6524B 100%)',
          borderColor: '#F6534B',
          id: 1
        },
        {
          name: '中学二级',
          percentage: '70%',
          num: '90',
          unit: '人',
          color: 'linear-gradient(90deg, #F0AE3B 0%, #F08B3B 100%)',
          borderColor: '#F08C3B',
          id: 1
        },
        {
          name: '正高级',
          percentage: '68%',
          num: '79',
          unit: '人',
          color: 'linear-gradient(90deg, #F0F03E 0%, #F0CC3E 100%)',
          borderColor: '#F0D13E',
          id: 1
        },
        {
          name: '特级',
          percentage: '45%',
          num: '60',
          unit: '人',
          color: 'linear-gradient(90deg, #31DE33 0%, #12C614 100%)',
          borderColor: '#13C816',
          id: 1
        }
      ]
    }
  },

  mounted () {

  }
}
</script>

<style lang="less">
  @import '~@/assets/css/variables.less';
  .charts_title{
    height: 40px;
    text-indent: 20px;
    color: @irrC;
    .h3{
      font-size: 18px;
      font-family: @MicrosoftYaHeiBold;
      font-weight: bold;
    }
    .h4{
      font-size: 12px;
      font-family: @Yahei;
    }
    margin-bottom: 20px;
  }
  .progress_box{
    width: cacl(100% - 40px);
    padding: 0 20px;
  }
</style>
