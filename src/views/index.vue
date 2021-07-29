<template>
  <div id="slide-wrap" @mouseover="pasue" @mouseout="play">
    <div id="slide-content" ref="con1" :class="{anim:animate==true}" >
      <div v-for='(item,i) in items' :key="i">{{item.name}}</div>
    </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      animate: false,

      timer: null
    }
  },

  created () {
    // this.autoSwitch()
  },
  methods: {
    scroll () {
      this.animate = true // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
      setTimeout(() => { //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
        this.items.push(this.items[0]) // 将数组的第一个元素添加到数组的
        this.items.shift() // 删除数组的第一个元素
        this.animate = false // margin-top 为0 的时候取消过渡动画，实现无缝滚动
      }, 200)
    },

    pasue () {
      console.log('暂停')
      clearInterval(this.timer)
    },
    play () {
      console.log('播放')
      this.autoSwitch()
    },
    autoSwitch () { // 自动播放
      this.timer = setInterval(this.scroll, 5000)
    }
  }
}
</script>

<style lang="less">
  #slide-wrap{
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: inline-block;
  }
  .anim{
    transition: all 0.5s;
    margin-left: -100%;
  }
  #slide-content{
    height: 100%;
    width: 100%;
  }
  #slide-content div{
    display: inline-block;
    width: 100%;
    height: 100%;
  }
</style>
