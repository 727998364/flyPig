<template>
  <div>
    <div class="section-container-btm" v-for="item of spotList" :key="item.id">
      <div class="section-container-btm-left" >
        <div class="imgs" :style="{backgroundImage:'url('+item.imgUrl+')'}">

        </div>
      </div>
      <div class="section-container-btm-right">
        <h2>{{ item.title }}</h2>
        <p>{{ item.desc}}</p>
        <span class="square" ref="box">{{ item.level }}</span>
        <span class="square">{{ item.indate}}</span>
        <div class="section-container-btm-con">
          <div class="section-container-btm-con-left">
            <span>￥</span>
            <span>{{ item.price }}</span>
            <span>起</span>
          </div>
          <div class="section-container-btm-con-right">
            <span>{{ item.score }}</span>
            <span>分</span>
            <span>月售{{ item.totalsale }}万+笔</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "TicketsSlide",
        props:["spotList"],
    }
</script>

<style scoped>
 .section-container-btm {
    display: -webkit-flex;
    padding-left: .12rem; }
 .section-container-btm .section-container-btm-left {
    padding: .1rem .1rem .1rem 0; }
 .section-container-btm .section-container-btm-left .imgs {
    width: 1.11rem;
    height: 1.11rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center; }
.section-container-btm .section-container-btm-right {
    padding: .1rem 0;
    border-bottom: 1px solid #f2f3f4; }
 .section-container-btm .section-container-btm-right h2 {
    font-size: .14rem;
    color: #333333;
    margin-bottom: .06rem; }
 .section-container-btm .section-container-btm-right p {
    font-size: .12rem;
    color: #999999;
    width: 2.26rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: .06rem; }
 .section-container-btm .section-container-btm-right span {
    height: .16rem;
    line-height: .16rem;
    font-size: .1rem;
    color: #fca500;
    border: 1px solid #fce9b8; }
 .section-container-btm .section-container-btm-right .square {
    margin-right: 6px;
    padding: 0 2px;
    text-align: center;
    display: block;
    float: left; }
 .section-container-btm .section-container-btm-right .section-container-btm-con {
    clear: both;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    margin-top: .5rem; }
 .section-container-btm .section-container-btm-right .section-container-btm-con span {
    border: 0;
    padding: 0; }
 .section-container-btm .section-container-btm-right .section-container-btm-con .section-container-btm-con-left {
    display: -webkit-flex;
    -webkit-align-items: flex-end; }
 .section-container-btm .section-container-btm-right .section-container-btm-con .section-container-btm-con-left span:first-child {
    height: .12rem;
    line-height: .12rem;
    font-family: "PingFangSC";
    color: #ff5000; }
 .section-container-btm .section-container-btm-right .section-container-btm-con .section-container-btm-con-left span:nth-child(2) {
    font-size: .18rem;
    height: .18rem;
    line-height: .22rem;
    font-family: "PingFangSC";
    font-weight: 500;
    color: #ff5000; }
 .section-container-btm .section-container-btm-right .section-container-btm-con .section-container-btm-con-left span:last-child {
    font-size: .12rem;
    height: .12rem;
    line-height: .12rem;
    font-family: "PingFangSC";
    color: #999999; }
 .section-container-btm .section-container-btm-right .section-container-btm-con .section-container-btm-con-right {
    display: -webkit-flex;
    -webkit-align-items: flex-end; }
 .section-container-btm .section-container-btm-right .section-container-btm-con .section-container-btm-con-right span:first-child {
    font-size: .14rem;
    height: .14rem;
    line-height: .14rem;
    font-family: "PingFangSC";
    font-weight: 500;
    color: #fca500; }
 .section-container-btm .section-container-btm-right .section-container-btm-con .section-container-btm-con-right span:nth-child(2) {
    font-size: .12rem;
    height: .12rem;
    line-height: .12rem;
    font-family: "PingFangSC";
    color: #fca500; }
 .section-container-btm .section-container-btm-right .section-container-btm-con .section-container-btm-con-right span:last-child {
    font-size: .12rem;
    height: .12rem;
    line-height: .12rem;
    font-family: "PingFangSC";
    color: #999999; }
</style>
