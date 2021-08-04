<template>
  <div class="charts_box">
    <div class="charts_title">
      <div class="h3">学生就读方式</div>
      <div class="h4">STUDYING WAY OF STUD</div>
    </div>
    <div id="containerStudyPie" style="height:200px;width:calc(100% - 40px)"></div>
  </div>
</template>

<script>
import { Pie } from '@antv/g2plot'
export default {
  data () {
    return {

    }
  },

  mounted () {
    const data = [
      { type: '住校', value: 300 },
      { type: '走读', value: 280 },
      { type: '半走读', value: 200 },
      { type: '午晚托', value: 150 },
      { type: '晚托', value: 100 }
    ]
    const piePlot = new Pie('containerStudyPie', {
      appendPadding: 10,
      data,
      angleField: 'value',
      colorField: 'type',
      radius: 0.6,
      innerRadius: 0.8,
      color: ['#00A5FF', '#00FFF8', '#62D863', '#F0CC3E', '#F1A76D'],
      label: {
        type: 'spider',
        labelHeight: 28,
        content: '{name} {percentage}',
        style: {
          fontSize: 14,
          fill: '#E9F1FC'
        }
      },
      interactions: [{ type: 'element-selected' }, { type: 'element-active' }],

      legend: {
        position: 'right',
        itemName: false,
        itemHeight: 10,
        itemValue: {
          formatter: (text, item) => {
            const items = data.filter((d) => d.type === item.value)
            return items.length ? text + ' :   ' + items.reduce((a, b) => a + b.value, 0) / items.length + '人' : '-'
          },
          style: {
            fill: '#E9F1FC'
          }
        }
      },
      statistic: false
    })

    piePlot.render()
  },
  methods: {

  }
}
</script>

<style lang="less" >
  #containerStudyPie{
    margin-left:20px;
  }
</style>
