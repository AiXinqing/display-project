<template>
  <div id="app">
    <dv-full-screen-container>
      <router-view/>
    </dv-full-screen-container>
  </div>
</template>

<style lang="less">
@import '~@/assets/css/variables.less';
#app {
  height: 100%;
  color: @white
}
</style>
