<template>
  <div class="charts_box">
    <div class="charts_title">
      <div class="h3">特殊人口分析</div>
      <div class="h4">CHARACTERISTIC POPUL</div>
    </div>
    <div class="progress_box"
      v-for="item in progressList"
      :key="item.id"
    >
      <labelProgress
        :progress="item"
      />
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      progressList: [
        {
          name: '留守儿童',
          percentage: '100%',
          num: '190',
          unit: '人',
          color: 'linear-gradient(90deg, #00A5FF 0%, #008BFF 100%)',
          borderColor: '#295182',
          id: 1
        },
        {
          name: '贫困生',
          percentage: '70%',
          num: '90',
          unit: '人',
          color: 'linear-gradient(90deg, #00FFF8 0%, #00FFC8 100%)',
          borderColor: '#295182',
          id: 123
        },
        {
          name: '教师子女',
          percentage: '68%',
          num: '79',
          unit: '人',
          color: 'linear-gradient(90deg, #F0F03E 0%, #F0CC3E 100%)',
          borderColor: '#295182',
          id: 134
        },
        {
          name: '艺体生',
          percentage: '45%',
          num: '60',
          unit: '人',
          color: 'linear-gradient(90deg, #F0AE3B 0%, #F08B3B 100%)',
          borderColor: '#295182',
          id: 122
        }
      ]
    }
  },

  mounted () {

  },
  methods: {

  }
}
</script>

<style lang="less" >

</style>
