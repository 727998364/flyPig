<template>
    <div class="myHeader">
      <div class="headerTop">
        <img src="../../../../static/img/my-sz.png" alt="">
        <img src="../../../../static/img/my-ly.png" alt="">
      </div>
      <div class="headerMid">
        <div class="headerMid-left">
          <img src="../../../../static/img/my-head.png" alt="">
          <span>Hulingling</span>
        </div>
        <div class="headerMid-right">
          <img src="../../../../static/img/my-server.png" alt="">
          <span>我的客服</span>
        </div>
      </div>
      <div class="HeaderBtm">
        <div class="HeaderBtm-con" v-if="headerInfo" v-for="item of headerInfo">
          <span>{{ item.number }}</span>
          <span>{{ item.desc }}</span>
        </div>

      </div>
      <div class="imgs">
        <img src="../../../../static/img/my-hy.png" alt="" width="100%">
      </div>
    </div>
</template>

<script>
    export default {
        name: "MyHeader",
        props:{
          headerImg:String,
          headerInfo:Array
        }
    }
</script>

<style scoped>
  .myHeader{
    width: 100%;
    background: white;
  }
  .headerTop{
    height: .45rem;
    display: -webkit-flex;
    -webkit-align-items: center;
    -webkit-justify-content: flex-end;
  }
  .headerTop img{
    margin-right: .14rem;
    width: .23rem;
    height: .23rem;
  }
  .headerMid{
    position: relative;
  }
  .headerMid-left{
    display: -webkit-flex;
    -webkit-align-items: center;
    padding-top: .19rem;
    padding-left: .12rem;
  }
  .headerMid-left img{
    width: .61rem;
    height: .61rem;
  }
  .headerMid-left span{
    display: block;
    font-size: .14rem;
    color: #333;
    font-weight: bold;
  }
  .headerMid-right{
    display: -webkit-flex;
    position: absolute;
    right: 0;
    bottom: .09rem;
    -webkit-border-top-left-radius: .13rem;
    -webkit-border-bottom-left-radius: .13rem;
    border: 2px solid #faebe2;
  }
  .headerMid-right img{
    width: .31rem;
    height: .32rem;
  }
  .headerMid-right span{
    display: block;
    font-size: .1rem;
    color: #333;
    width: .3rem;
  }
  .HeaderBtm{
    padding: .19rem .12rem .15rem;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    text-align: center;
  }
  .HeaderBtm-con span:first-child{
    font-size: .13rem;
    color: #333;
    font-weight: bold;
    display: block;
  }
  .HeaderBtm-con span:last-child{
    font-size: .12rem;
    color: #333;
    display: block;
  }
  .imgs img{
    width: 3.51rem;
    height: .69rem;
    margin: 0 auto;
  }
</style>
