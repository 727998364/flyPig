<template>
  <div class="myPlay-info">
    <div class="myPlay">
      <div class="title">
        <h2>游戏乐园</h2>
      </div>
      <div class="play-list">
        <div class="left">
          <span>我的足迹</span>
          <span>记录一生的旅行</span>
        </div>
        <img src="../../../../static/img/my-dq.png" alt="">
        <div class="left">
          <span>飞猪环游记</span>
          <span>看世界玩转全球</span>
        </div>
        <img src="../../../../static/img/my-pig.png" alt="">
      </div>
    </div>
    <div class="adv">
      <img src="../../../../static/img/my-adv.png" alt="" width="100%">
    </div>
  </div>
</template>

<script>
    export default {
        name: "MyPlaygames"
    }
</script>

<style scoped>
  .myPlay-info{
    width: 100%;
  }
  .myPlay{
    margin: .09rem .12rem;
    background: white;
    border-radius: .04rem;
    padding-bottom: .12rem;
  }
  .title{
    padding: 0 .12rem;
    display: -webkit-flex;
    -webkit-align-items: center;
    -webkit-justify-content: space-between;
    height: .4rem;
  }
  .title h2{
    font-size: .15rem;
    color: #333;
  }
  .play-list{
    padding: .1rem .12rem 0;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    -webkit-align-items: center;
  }
  .left span:first-child{
     font-weight: bold;
     display: block;
     font-size: .13rem;
     color: #333;
   }
  .left span:last-child{
    display: block;
    font-size: .13rem;
    color: #333;
  }
  .play-list img{
    width: .49rem;
    height: .49rem;
  }
  .adv{
    margin: .09rem .12rem;
    background: white;
    border-radius: .04rem;
    width: 3.51rem;
    height: .84rem;
  }
</style>
