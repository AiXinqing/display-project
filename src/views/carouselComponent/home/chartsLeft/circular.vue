<template>
  <div class="charts_box mt_40">
    <div class="charts_title">
      <div class="h3">教师学历分布</div>
      <div class="h4">TEACHER’S EDUCATION</div>
    </div>
    <div style="display: flex;justify-content:space-between">

      <div class="circular_content"
        v-for="item in circularList"
        :key="item.id"
      >
        <circular-progress :circular="item"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      circularList: [
        {
          color: '#F0CC3E',
          colorB: '#295182',
          name: '专科',
          num: '120',
          unit: '人',
          id: 'circular_1',
          percent: 0.03
        },
        {
          color: '#00FFF8',
          colorB: '#295182',
          name: '本科',
          num: '500',
          unit: '人',
          id: 'circular_2',
          percent: 0.7
        },
        {
          color: '#31DE33',
          colorB: '#295182',
          name: '研究生及以上',
          num: '200',
          unit: '人',
          id: 'circular_3',
          percent: 0.17
        }

      ]
    }
  }
}
</script>

<style lang="less" >
  @import '~@/assets/css/variables.less';
  .circular_content{
    width: calc(100% -40px);
    padding: 0 20px;
    display: flex;
  }
</style>
