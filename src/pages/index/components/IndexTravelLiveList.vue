<template>
  <div class="travel-live-list">
    <div class="" v-if="listInfo" v-for="item of listInfo" :key="item.id">
      <a href="##" :style="{backgroundImage:'url('+item.imgUrl+')'}">
        <span class="travel-live-list-span">{{ item.desc1 }}</span>
        <div class="travel-live-list-word">
          <img src="../../../../static/img/index-zp.jpg" alt="">
          <span>{{ item.desc2 }}<i>观看</i></span>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
    export default {
        name: "IndexTravelLiveList",
        props:["listInfo"]
    }
</script>

<style scoped>
  .travel-live-list {
    display: -webkit-flex;
    padding: 0 .12rem;
    -webkit-justify-content: space-between; }
  .travel-live-list a {
    display: block;
    position: relative;
    width: 1.71rem;
    height: 1.28rem;
    background-size: cover;
    border-radius: .06rem; }
  .travel-live-list a .travel-live-list-span {
    position: absolute;
    left: .12rem;
    bottom: .36rem;
    font-size: .14rem;
    font-weight: bold;
    color: white; }
  .travel-live-list a .travel-live-list-word {
    position: absolute;
    left: .12rem;
    bottom: .12rem;
    width: 1.1rem;
    height: .18rem;
    background: rgba(0, 0, 0, 0.8);
    border-radius: .06rem;
    display: -webkit-flex;
    -webkit-align-items: center; }
  .travel-live-list a .travel-live-list-word img {
    width: .54rem;
    height: .18rem; }
  .travel-live-list a .travel-live-list-word span {
    color: white;
    font-size: .1rem;
    display: block;
    text-indent: .06rem; }
  .travel-live-list a .travel-live-list-word span i {
    font-style: normal; }
</style>
