<template>
  <div id="digital-flop">
    <div
      class="digital-flop-item"
      v-for="item in digitalFlopData"
      :key="item.title"
    >
      <div class="digital-flop-title">{{ item.title }}</div>
      <div class="digital-flop">
        <!-- <dv-digital-flop
          :config="item.number"
          style="width: 129px; height: 50px;"
        /> -->
        <div class="flop_num">{{item.number}}</div>
        <div class="unit">{{ item.unit }}</div>
        <div :class="['svgIcon',item.svgIcon]"></div>
        <!-- <component class="svgIcon" :is="item.svgIcon" /> -->
      </div>
    </div>

  </div>
</template>

<script>
// import gradesNum from '../../svgIcon/gradesNum'
// import classNum from '../../svgIcon/classNum'
// import FacultyNum from '../../svgIcon/FacultyNum'
// import soleDuty from '../../svgIcon/soleDuty'
// import studentNum from '../../svgIcon/studentNum'
// import teacherStudent from '../../svgIcon/teacher-student'
export default {
  name: 'DigitalFlop',

  components: {
    // gradesNum,
    // classNum,
    // FacultyNum,
    // soleDuty,
    // studentNum,
    // teacherStudent
  },

  data () {
    return {
      digitalFlopData: []
    }
  },
  methods: {
    createData () {
      // const { randomExtend } = this

      this.digitalFlopData = [
        {
          title: '年级总数',
          number: 9,
          unit: '个',
          svgIcon: 'gradesNum'
        },
        {
          title: '班级总数',
          number: 50,
          unit: '个',
          svgIcon: 'classNum'
        },
        {
          title: '教职工总人数',
          number: 45,
          unit: '人',
          svgIcon: 'FacultyNum'
        },
        {
          title: '专职教师人数',
          number: 20,
          unit: '人',
          svgIcon: 'soleDuty'
        },
        {
          title: '学生总人数',
          number: 44,
          unit: '人',
          svgIcon: 'studentNum'
        },
        {
          title: '师生比',
          number: '1:8',
          unit: '人',
          svgIcon: 'teacherStudent'
        }

      ]
    },
    randomExtend (minNum, maxNum) {
      if (arguments.length === 1) {
        return parseInt(Math.random() * minNum + 1, 10)
      } else {
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
      }
    }
  },
  mounted () {
    const { createData } = this

    createData()

    setInterval(createData, 30000)
  }
}
</script>

<style lang="less">
@import '~@/assets/css/variables.less';
#digital-flop {
  position: relative;
  // height: 15%;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:cacl(100% - 70px);
  padding:0 35px;
  margin-top:20px;

  .digital-flop-item {
    width: 290px;
    padding: 19px 0;
    background: @flop;
    margin-right:20px;
  }

  .digital-flop-item:last-child{
    margin-right:0;
  }

  .digital-flop-title {
    font-size: 18px;
    margin-bottom:17px;
    margin-left: 35px;
  }

  .digital-flop {
    display: flex;
    position:relative;
    margin-left: 35px;

    .svgIcon{
      position: absolute;
      right:35px;
      bottom:0;
      width: 72px;
      height: 72px;
      background-size: 100% 100%;
      background: url('~@/assets/img/indexIcon.png') -39px -49px no-repeat;

      &.classNum{
        background: url('~@/assets/img/indexIcon.png') -149px -49px no-repeat;
      }

      &.FacultyNum{
        background: url('~@/assets/img/indexIcon.png') -259px -49px no-repeat;
      }

      &.soleDuty{
        background: url('~@/assets/img/indexIcon.png') -369px -49px no-repeat;
      }

      &.studentNum{
        background: url('~@/assets/img/indexIcon.png') -479px -49px no-repeat;
      }

      &.teacherStudent{
        background: url('~@/assets/img/indexIcon.png') -589px -49px no-repeat;
      }
    }
  }

  .unit {
    margin-left: 10px;
    display: flex;
    align-items: flex-end;
    box-sizing: border-box;
    padding-bottom: 13px;
    font-size: 16px;
    font-family: @MicrosoftYaHeiBold;
    font-weight: bold;
    color: @headeHighlight;
  }

  .flop_num{
    font-size: 40px;
    font-family: @DINCondBlack;
    font-weight: 900;
    color: @headeHighlight;
  }
}
</style>
