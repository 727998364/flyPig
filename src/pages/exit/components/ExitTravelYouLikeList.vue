<template>
  <div class="you-like-list" v-if="youlikeInfo">
    <div class="you-like-list-slide" v-for="item of youlikeInfo" :key="item.id">
      <div class="you-like-list-slide-pic" :style="{backgroundImage:'url('+item.imgUrl+')'}">
        <div class="word">
         {{ item.theme }}
        </div>
      </div>
      <div class="you-like-list-slide-word">
        <span class="sp">{{ item.desc }}</span>
        <div class="you-like-list-slide-word-detail">
          <div class="you-like-list-slide-word-detail-left">
            <span>￥</span>
            <span>{{ item.price }}</span>
            <span>月售{{ item.totalsale }}笔</span>
          </div>
          <div class="you-like-list-slide-word-detail-right">
            <span>相似</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ExitTravelYouLikeList",
        props:["youlikeInfo"]
    }
</script>

<style scoped>
  .word{
    width: .51rem;
    height: .21rem;
    line-height: .21rem;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.7);
    border-bottom-right-radius: .095rem;
    border-top-left-radius: .06rem;
    font-size: .12rem;
    color: white;
    position: absolute;
    left: 0;
    top:0;
  }
  .you-like-list {
    display: -webkit-flex;
    -webkit-flex-wrap: wrap;
    padding: 0 .12rem;
    -webkit-justify-content: space-between;
    margin-top: .09rem; }
  .you-like-list .you-like-list-slide {
    padding-bottom: .12rem;
    background: white;
    margin-top: .09rem;
    border-radius: .06rem; }
  .you-like-list .you-like-list-slide .you-like-list-slide-pic {
    position: relative;
    width: 1.71rem;
    height: 1.71rem;
    background-size: cover;
    border-top-left-radius: .06rem;
    border-top-right-radius: .06rem; }
  .you-like-list .you-like-list-slide .you-like-list-slide-word{
    position: relative;
    padding-left: 12px;
  }
  .you-like-list .you-like-list-slide .you-like-list-slide-word span {
    display: block;
  }
  .you-like-list .you-like-list-slide .you-like-list-slide-word .sp {
    font-size: .13rem;
    font-weight: 600;
    color: #333333;
    height: .36rem;
    line-height: .185rem;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 1.47rem;
    white-space: pre-wrap; }
  .you-like-list .you-like-list-slide .you-like-list-slide-word .you-like-list-slide-word-detail .you-like-list-slide-word-detail-left{
    display: -webkit-flex;
    -webkit-align-items: flex-end;
    margin-top: .15rem;
  }
  .you-like-list .you-like-list-slide .you-like-list-slide-word .you-like-list-slide-word-detail{
    display: -webkit-flex;
    -webkit-align-items: flex-end;
    margin-top: .15rem;
  }
  .you-like-list .you-like-list-slide .you-like-list-slide-word .you-like-list-slide-word-detail span {
    display: block; }
  .you-like-list .you-like-list-slide .you-like-list-slide-word .you-like-list-slide-word-detail .you-like-list-slide-word-detail-left span:nth-of-type(1) {
    font-size: .11rem;
    color: #ff5000;
    line-height: .11rem;
    height: .11rem; }
  .you-like-list .you-like-list-slide .you-like-list-slide-word .you-like-list-slide-word-detail .you-like-list-slide-word-detail-left span:nth-of-type(2) {
    font-size: .16rem;
    color: #ff5000;
    line-height: .16rem;
    height: .16rem; }
  .you-like-list .you-like-list-slide .you-like-list-slide-word .you-like-list-slide-word-detail .you-like-list-slide-word-detail-left span:nth-of-type(3) {
    font-size: .11rem;
    color: #999999;
    margin-left: .04rem;
    height: .11rem;
    line-height: .11rem; }
  .you-like-list-slide-word-detail-right span{
    font-size: .11rem;
    width: .4rem;
    height: .24rem;
    text-align: center;
    line-height: .24rem;
    border-top-left-radius: .12rem;
    border-bottom-left-radius: .12rem;
    color: rgb(102, 102, 102);
    display: block;
    background: #f7f7f7;
    position: absolute;
    right: 0;
    bottom: 0;
  }
</style>
