<template>
  <svg width="147px" height="42px" viewBox="0 0 147 42">
    <title>编组 46</title>
    <defs>
        <linearGradient x1="62.9049928%" y1="47.8458569%" x2="36.5826417%" y2="52.7041656%" id="linearGradient-1">
            <stop stop-color="#122A47" stop-opacity="0.122077142" offset="0%"/>
            <stop stop-color="#00FFF8" stop-opacity="0.130672428" offset="46.735174%"/>
            <stop stop-color="#122A47" stop-opacity="0.252126414" offset="100%"/>
        </linearGradient>
        <linearGradient x1="16.6731631%" y1="44.9813191%" x2="100%" y2="55.1763503%" id="linearGradient-2">
            <stop stop-color="#00A5FF" stop-opacity="0.324835077" offset="0%"/>
            <stop stop-color="#00FFF8" offset="100%"/>
        </linearGradient>
        <polygon id="path-3" points="3 0 128.553106 0 143 16.7425081 143 19.540611 143 31.5325774 143 40 133.643551 40 118.322205 40 114.862598 35.3736975 94.9880701 35.3736975 81.5401518 40 16.0966711 40 3 18.2281394"/>
        <filter x="-2.5%" y="-8.8%" width="105.0%" height="117.5%" filterUnits="objectBoundingBox" id="filter-4">
            <feGaussianBlur stdDeviation="3" in="SourceAlpha" result="shadowBlurInner1"/>
            <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"/>
            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"/>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 1   0 0 0 0 0.97254902  0 0 0 1 0" type="matrix" in="shadowInnerInner1"/>
        </filter>
    </defs>
    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="1首页" transform="translate(-209.000000, -253.000000)">
            <g id="编组-46" transform="translate(209.500000, 254.000000)">
                <g id="矩形">
                    <use fill="url(#linearGradient-1)" fill-rule="evenodd" xlink:href="#path-3"/>
                    <use fill="black" fill-opacity="1" filter="url(#filter-4)" xlink:href="#path-3"/>
                    <use stroke="url(#linearGradient-2)" stroke-width="1" xlink:href="#path-3"/>
                </g>
                <circle id="椭圆形" stroke="#00FFF8" fill="#122A47" cx="3" cy="17" r="3"/>
                <circle id="椭圆形备份-3" stroke="#00FFF8" fill="#122A47" cx="143" cy="17" r="3"/>
            </g>
        </g>
    </g>
    <text class="text_irr" :x="147/2" :y="42/2 + 1" >{{svgText}}</text>
  </svg>
</template>

<script>
export default {
  props: {
    svgText: {
      type: String,
      default: '师资力量'
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~@/assets/css/variables.less';
  text {
    stroke-width: 1;
    font-size: 20px;
    text-anchor: middle;
    /* 文本水平居中 */
    dominant-baseline: middle;
    font-family: @MicrosoftYaHeiBold;
    /* 文本垂直居中 */
    fill: @irrC;
  }
</style>
