<template>
  <div class="travel-theme-list" v-if="listInfo">
    <a href="##" v-for="item of listInfo" :key="item.id" :style="{backgroundImage:'url('+item.imgUrl+')'}">
      <span>{{ item.desc }}</span>
      <span>{{ item.desc1}}</span>
    </a>
  </div>
</template>
<script>
    export default {
        name: "IndexTravelThemeList",
        props:["listInfo"]
    }
</script>

<style scoped>
 .travel-theme-list {
    display: -webkit-flex;
    padding: 0 .12rem;
    -webkit-flex-wrap: wrap;
    -webkit-justify-content: space-between;
    padding-bottom: .22rem; }
  .travel-theme .travel-theme-list a:nth-of-type(1) {
    width: 2.31rem;
    height: 1.54rem;
    background-size: cover; }
  .travel-theme .travel-theme-list a {
    width: 1.11rem;
    height: 1.54rem;
    display: block;
    border-radius: .08rem;
    position: relative;
    background-size: cover;
    margin-bottom: .1rem; }
  .travel-theme .travel-theme-list a span:first-child {
    position: absolute;
    left: .12rem;
    bottom: .32rem;
    font-size: .16rem;
    font-weight: bold;
    color: white; }
  .travel-theme .travel-theme-list a span:last-child {
    position: absolute;
    left: .12rem;
    bottom: .12rem;
    font-size: .14rem;
    color: white; }
</style>
