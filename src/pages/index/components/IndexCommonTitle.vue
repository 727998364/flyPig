<template>
  <div class="keyBigTitle" v-if="titleInfo">
    <h1 class="commonTit">{{ titleInfo.title }}</h1>
    <h5 class="moreLink">{{ titleInfo.link }}</h5>
  </div>
</template>

<script>
    export default {
        name: "IndexCommonTitle",
        props:["titleInfo"]
    }
</script>

<style scoped>
  .keyBigTitle {
    height: .58rem;
    display: -webkit-flex;
    -webkit-align-items: center;
    -webkit-justify-content: space-between; }

  .commonTit {
    font-size: .24rem;
    font-weight: 600;
    margin-left: .12rem;
    color: #444444; }

  .moreLink {
    font-weight: 300;
    color: #666666;
    font-size: .13rem;
    margin-right: .12rem; }
</style>
