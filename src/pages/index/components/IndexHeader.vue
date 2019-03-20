<template>
  <div class="header" v-if="data">
    <div class="headerCon" :style="{backgroundImage:'url('+data.indexHeaderBg+')'}">
      <div class="header-title">
        <img :src="data.indexLogo" alt="">
        <img :src="data.indexHeader" alt="">
      </div>
      <div class="header-search">
        <a href="##">
          <span class="iconfont icon-sousuo"></span>
          <span>广州长隆野生动物世界</span>
        </a>
      </div>
      <div class="banner">
        <index-header-swiper :swiperlist="data.swiperList"></index-header-swiper>
      </div>
    </div>
  </div>
</template>

<script>
    import IndexHeaderSwiper from "./IndexHeaderSwiper"
    export default {
        name: "IndexHeader",
        props:["data"],
        components:{
          IndexHeaderSwiper
        }
    }
</script>

<style scoped>
  .header .headerCon {
    width: 100%;
    height: 2.1rem;
 }
  .header .headerCon .header-title {
    height: .44rem;
    position: relative;
    display: -webkit-flex;
    -webkit-align-items: center;
    -webkit-justify-content: center; }
  .header .headerCon .header-title img:first-child {
    width: .47rem;
    height: .2rem; }
  .header .headerCon .header-title img:last-child {
    width: .24rem;
    height: .24rem;
    position: absolute;
    top: .1rem;
    right: .14rem; }
  .header .headerCon .header-search {
    width: 3.52rem;
    height: .32rem;
    margin: 0 auto;
    background: #ffffff;
    border-radius: .16rem;
    border-top-right-radius: 0;
    line-height: .32rem; }
  .header .headerCon .header-search a {
    display: block;
    display: -webkit-flex;
    -webkit-align-items: center;
    text-indent: .1rem; }
  .header .headerCon .header-search a span {
    display: block;
    font-size: .13rem;
    color: #666666; }
  .header .headerCon .banner {
    padding: .12rem; }
</style>
