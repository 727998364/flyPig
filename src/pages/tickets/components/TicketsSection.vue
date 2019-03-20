<template>
  <div class="section">
    <div class="section-container">
      <div class="section-container-top">
        <div class="section-container-top-con">
          <span>使用日期</span>
          <span class="iconfont icon-icon-up-copy"></span>
        </div>
        <div class="section-container-top-con">
          <span>排序</span>
          <span class="iconfont icon-icon-up-copy"></span>
        </div>
        <div class="section-container-top-con">
          <span>筛选</span>
          <span class="iconfont icon-shaixuan"></span>
        </div>
      </div>
      <tickets-slide :spotList="spotlist"></tickets-slide>
    </div>
  </div>
</template>

<script>
  import TicketsSlide from "./TicketsSlide"
    export default {
        name: "TicketsSection",
        props:["spotlist"],

        components:{
          TicketsSlide
        },

    }
</script>

<style scoped>
  .section {
    width: 100%;
    background: white;
    margin-top: .14rem; }
  .section .section-container .section-container-top {
    display: -webkit-flex;
    -webkit-justify-content: space-around;
    height: .4rem;
    border-bottom: 1px solid #f2f3f4; }
  .section .section-container .section-container-top .section-container-top-con {
    display: -webkit-flex;
    -webkit-align-items: center; }
  .section .section-container .section-container-top .section-container-top-con span {
    color: #000;
    font-size: .14rem;
    display: block; }
</style>
