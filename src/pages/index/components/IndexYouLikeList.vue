<template>
  <div class="you-like-list" v-if="listInfo">
    <div class="you-like-list-slide" v-for="item of listInfo" :key="item.id">
      <div class="you-like-list-slide-pic" :style="{backgroundImage:'url('+item.imgUrl+')'}">
      </div>
      <div class="you-like-list-slide-word">
        <span class="words">{{ item.title }}</span>
        <span class="sp">{{ item.desc }}</span>
        <div class="you-like-list-slide-word-detail">
          <span>￥</span>
          <span>{{ item.price }}</span>
          <span>{{ item.totalsale }}万人购买</span>
          <img src="../../../../static/img/index-slh.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        name: "IndexYouLikeList",
        props:["listInfo"]
    }
</script>

<style scoped>
  .you-like-list {
    display: -webkit-flex;
    -webkit-flex-wrap: wrap;
    padding: 0 .12rem;
    -webkit-justify-content: space-between;
    margin-top: .09rem; }
  .you-like-list .you-like-list-slide {
    padding-bottom: .12rem;
    background: white;
    margin-bottom: .09rem;
    border-radius: .06rem; }
  .you-like-list .you-like-list-slide .you-like-list-slide-pic {
    width: 1.71rem;
    height: 1.71rem;
    background-size: cover;
    border-top-left-radius: .06rem;
    border-top-right-radius: .06rem; }
  .you-like-list .you-like-list-slide .you-like-list-slide-word{
    padding-left: 12px;
  }
  .you-like-list .you-like-list-slide .you-like-list-slide-word span {
    display: block;
 }
  .you-like-list .you-like-list-slide .you-like-list-slide-word .words {
    font-size: .12rem;
    margin-top: .12rem;
    line-height: .12rem;
    font-weight: 600;
    color: #529b69;
    margin-bottom: .1rem; }
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
  .you-like-list .you-like-list-slide .you-like-list-slide-word .you-like-list-slide-word-detail {
    display: -webkit-flex;
    -webkit-align-items: flex-end;
    margin-top: .15rem;
  }
  .you-like-list .you-like-list-slide .you-like-list-slide-word .you-like-list-slide-word-detail span {
    display: block; }
  .you-like-list .you-like-list-slide .you-like-list-slide-word .you-like-list-slide-word-detail span:nth-of-type(1) {
    font-size: .11rem;
    color: #ff5000;
    line-height: .11rem;
    height: .11rem; }
  .you-like-list .you-like-list-slide .you-like-list-slide-word .you-like-list-slide-word-detail span:nth-of-type(2) {
    font-size: .16rem;
    color: #ff5000;
    line-height: .16rem;
    height: .16rem; }
  .you-like-list .you-like-list-slide .you-like-list-slide-word .you-like-list-slide-word-detail span:nth-of-type(3) {
    font-size: .11rem;
    color: #999999;
    margin-left: .04rem;
    height: .11rem;
    line-height: .11rem; }
  .you-like-list .you-like-list-slide .you-like-list-slide-word .you-like-list-slide-word-detail img {
    width: .18rem;
    height: .08rem;
    margin-left: .1rem; }
</style>
