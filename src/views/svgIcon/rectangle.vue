<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="112px" height="44px" viewBox="0 0 112 44" version="1.1">
    <title>矩形</title>
    <defs>
        <linearGradient x1="10.2221176%" y1="47.8436228%" x2="90.7375721%" y2="54.5501633%" id="linearGradient-1">
            <stop stop-color="#00FFFC" stop-opacity="0" offset="0%"/>
            <stop stop-color="#00FFF8" offset="100%"/>
        </linearGradient>
        <polygon id="path-2" points="221.129526 16 297.456883 16 312.474672 37.0071502 302.720029 46 227.478067 46 213.027426 25.7861862"/>
        <filter x="-9.7%" y="-31.7%" width="119.4%" height="163.3%" filterUnits="objectBoundingBox" id="filter-3">
            <feMorphology radius="0.5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"/>
            <feOffset dx="0" dy="0" in="shadowSpreadOuter1" result="shadowOffsetOuter1"/>
            <feMorphology radius="1" operator="erode" in="SourceAlpha" result="shadowInner"/>
            <feOffset dx="0" dy="0" in="shadowInner" result="shadowInner"/>
            <feComposite in="shadowOffsetOuter1" in2="shadowInner" operator="out" result="shadowOffsetOuter1"/>
            <feGaussianBlur stdDeviation="3" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0.647058824   0 0 0 0 1  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"/>
        </filter>
    </defs>
    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="矩形" transform="translate(-207.000000, -9.000000)">
            <use fill="black" fill-opacity="1" filter="url(#filter-3)" xlink:href="#path-2"/>
            <use stroke="url(#linearGradient-1)" stroke-width="1" xlink:href="#path-2"/>
        </g>
    </g>
    <text :x="112/2" :y="44/2 + 1" >{{svgText}}</text>
  </svg>
</template>

<script>
export default {
  props: {
    svgText: {
      type: String,
      default: '首页'
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~@/assets/css/variables.less';
  text {
    stroke-width: 1;
    font-size: 16px;
    text-anchor: middle;
    /* 文本水平居中 */
    dominant-baseline: middle;
    /* 文本垂直居中 */
    fill: @headeHighlight;
  }
</style>
