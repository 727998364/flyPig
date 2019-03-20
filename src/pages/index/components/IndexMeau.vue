<template>
  <div class="meauList">
    <div class="meauList-con">
      <index-meau-top :meaudata="meaulist"></index-meau-top>
      <div class="meauList-con-active">
        <a href="##">
          <img src="../../../../static/img/index-mrnl.jpg" alt="">
          <span>兑换￥500机票券</span>
        </a>
        <a href="##">
          <img src="../../../../static/img/index-reg.jpg" alt="">
          <span>马上签到</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
    import IndexMeauTop from './IndexMeauTop'
    export default {
        name: "IndexMeau",
        props:["meaulist"],
        components:{
          IndexMeauTop
        }
    }
</script>

<style scoped>
  .meauList {
    width: 100%; }
  .meauList .meauList-con {
    background: white;
    margin: 0 .12rem .12rem .12rem;
    display: -webkit-flex;
    -webkit-flex-wrap: wrap;
    border-radius: .08rem; }
  .meauList .meauList-con .meauList-con-title {
    box-sizing: border-box;
    width: 25%;
    display: block;
    padding-top: .16rem;
    padding-bottom: .1rem;
    text-align: center;
    border-bottom: 1px solid #f4f4f4;
    border-right: 1px solid #f4f4f4; }
  .meauList .meauList-con .meauList-con-title span {
    display: block; }
  .meauList .meauList-con .meauList-con-title span:first-child {
    font-size: .14rem;
    line-height: .14rem;
    font-weight: 500;
    color: #333;
    margin-bottom: .1rem; }
  .meauList .meauList-con .meauList-con-title span:last-child {
    font-size: .12rem;
    line-height: .12rem;
    color: #666; }
  .meauList .meauList-con .meauList-con-title:nth-of-type(4n) {
    border-right: 0; }
  .meauList .meauList-con .meauList-con-active {
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    padding: .13rem; }
  .meauList .meauList-con .meauList-con-active a {
    display: -webkit-flex;
    -webkit-align-items: center; }
  .meauList .meauList-con .meauList-con-active a span {
    color: #333333;
    font-size: .13rem;
    display: block;
    margin-left: .1rem; }
  .meauList .meauList-con .meauList-con-active a:nth-of-type(1) img {
    width: .77rem;
    height: .25rem; }
  .meauList .meauList-con .meauList-con-active a:nth-of-type(2) {
    margin-left: .12rem; }
  .meauList .meauList-con .meauList-con-active a:nth-of-type(2) img {
    width: .56rem;
    height: .25rem; }
</style>
