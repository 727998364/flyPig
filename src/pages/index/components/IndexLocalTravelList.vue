<template>
  <div class="local-travel-list" v-if="listInfo">
    <a href="##" v-for="item of listInfo" :key="item.id">
      <img :src="item.imgUrl" alt="">
      <span>{{ item.desc }}</span>
      <span></span>
    </a>
  </div>
</template>
<script>
    export default {
        name: "IndexLocalTravelList",
        props:["listInfo"]
    }
</script>

<style scoped>
  .local-travel-list {
    display: -webkit-flex;
    overflow-x: auto;
    padding-left: .12rem;
    padding-bottom: .16rem; }
  .local-travel-list a {
    display: block;
    border-radius: .08rem;
    position: relative;
    margin-right: .1rem; }
  .local-travel-list a img {
    width: 1.08rem;
    height: 1.08rem; }
  .local-travel-list a span {
    position: absolute;
    left: .12rem;
    bottom: .12rem;
    font-size: .2rem;
    font-weight: bold;
    color: white; }
</style>
