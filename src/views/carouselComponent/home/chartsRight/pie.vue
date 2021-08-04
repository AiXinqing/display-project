<template>
  <div class="charts_box">
    <div class="charts_title">
      <div class="h3">性别比例</div>
      <div class="h4">GENDER RATIO</div>
    </div>
    <div id="containerSexPie" style="height:200px;width:calc(100% - 40px)"></div>
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
      { type: '男', value: 60 },
      { type: '女', value: 40 }
    ]
    const piePlot = new Pie('containerSexPie', {
      appendPadding: 10,
      data,
      angleField: 'value',
      colorField: 'type',
      radius: 0.7,
      color: ['#00A5FF', '#31DE33'],
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
        },
        marker: {
          symbol: 'square'
        }
      },
      label: {
        type: 'spider',
        labelHeight: 28,
        content: '{name} : {percentage}',
        style: {
          fill: '#E9F1FC',
          fontSize: 14
        }

      },
      interactions: [{ type: 'element-active' }]
    })

    piePlot.render()
  },
  methods: {

  }
}
</script>

<style lang="less" >
  #containerSexPie{
    margin-left:20px;
  }
</style>
