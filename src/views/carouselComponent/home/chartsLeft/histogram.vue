<template>
  <div class="charts_box mt_40">
    <div class="charts_title">
      <div class="h3">教师年龄分布</div>
      <div class="h4">TEACHER AGE</div>
    </div>
    <div id="containerColumn" style="height:220px;width:calc(100% - 40px)"></div>
  </div>
</template>

<script>
import { Column } from '@antv/g2plot'
export default {
  mounted () {
    const data = [
      {
        type: '20-30岁',
        sales: 620
      },
      {
        type: '31-40岁',
        sales: 500
      },
      {
        type: '41-50岁',
        sales: 505
      },
      {
        type: '51岁以上',
        sales: 300
      }

    ]
    const columnPlot = new Column('containerColumn', {
      data,
      xField: 'type',
      yField: 'sales',
      label: {
        // 可手动配置 label 数据标签位置
        position: 'top', // 'top', 'bottom', 'middle',
        // 配置样式
        style: {
          fill: '#FFFFFF',
          opacity: 1
        }
      },
      color: '#00FFF8',
      maxColumnWidth: 20,
      xAxis: {
        label: {
          autoHide: true,
          autoRotate: false
        }

      },
      meta: {
        // type: {
        //   alias: '类别'
        // },
        sales: {
          alias: '共有'
        }
      }
    })

    columnPlot.render()
  }
}
</script>

<style lang="less">
  @import '~@/assets/css/variables.less';
  .charts_box{
    margin-top: 5px;
    &.mt_40{
      margin-top: 40px;
    }
  }

  #containerColumn{
    margin-left: 20px;
  }

</style>
