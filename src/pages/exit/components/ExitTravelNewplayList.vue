<template>
  <div class="play-list">
    <div class="play-list-con">
      <div class="play-list-con-info" v-if="listInfo" v-for="item of listInfo" :key="item.id">
        <a href="##" :style="{backgroundImage:'url('+item.imgUrl+')'}">
        </a>
        <span>{{ item.desc }}</span>
        <span>{{ item.desc1}}</span>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        name: "ExitTravelNewplayList",
        props:["listInfo"]
    }
</script>

<style scoped>
 .play-list{
   width: 100%;
 }
 .play-list-con {
    background: white;
    display: -webkit-flex;
    padding: .18rem .12rem .2rem;
    -webkit-justify-content: space-between;
    }
  .play-list .play-list-con a {
    height: 1.14rem;
    width: 1.14rem;
    border-radius: .06rem;
    display: block;
    background-size: cover;
    margin-bottom: .1rem; }
  .play-list-con-info{
    text-align: center;
  }
  .play-list .play-list-con-info span:nth-of-type(1) {
    display: block;
    margin-top: 9px;
    color: rgb(51, 51, 51);
    line-height: .14rem;
    font-size: .14rem;}
  .play-list .play-list-con-info span:nth-of-type(2) {
    display: block;
    margin-top: .06rem;
    line-height: .12rem;
    color: rgb(102, 102, 102);
    font-size: .12rem;}
</style>
