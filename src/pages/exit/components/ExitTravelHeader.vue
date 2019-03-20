<template>
    <div class="exitTravel-header">
      <div class="exitTravel-header-con">
        <img :src="headinfo.headerBg" class="bgimg" alt="">
        <div class="exitTravel-header-con-top">
          <img :src="headinfo.backImg" alt="">
          <h1>{{ headinfo.title }}</h1>
          <img :src="headinfo.moerImg" alt="">
        </div>
        <div class="exitTravel-header-con-search">
          <span class="iconfont icon-sousuo"></span>
          <span>搜索目的地/关键词</span>
        </div>
      </div>
      <div class="shadow">

      </div>
    </div>
</template>

<script>
    export default {
        name: "ExirtTavelHeader",
        props:["headinfo"]
    }
</script>

<style scoped>
  .exitTravel-header{
    width:100%;
  }
  .exitTravel-header-con{
    height: 1.06rem;
  }
  .exitTravel-header-con .bgimg{
    width: 3.75rem;
    height: 2.08rem;
    position: absolute;
    z-index: -999;
  }
  .exitTravel-header-con-top{
    padding: 0 .12rem;
    display: -webkit-flex;
    height: .44rem;
    -webkit-align-items: center;
    -webkit-justify-content: space-between;
    margin-bottom: .05rem;
  }
  .exitTravel-header-con-top img{
    width: .24rem;
    height: .24rem;
    /*background-color: white;*/
  }
  .exitTravel-header-con-top h1{
    font-size: .18rem;
    color: white;
  }
  .exitTravel-header-con-search{
    display: -webkit-flex;
    -webkit-align-items: center;
    width: 3.51rem;
    height: .32rem;
    border-radius: .16rem;
    background: white;
    margin: 0 auto;
  }
  .exitTravel-header-con-search span{
    font-size: .13rem;
    margin-left: .02rem;
    color: rgb(102, 102, 102);
    text-indent: .1rem;
  }
  .shadow{
    height: .2rem;
    background: rgba(255,255,255,0.8);
  }
</style>
