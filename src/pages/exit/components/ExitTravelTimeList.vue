<template>
  <div class="list">
    <div class="list-con" v-if="listInfo" v-for="items of listInfo" :key="items.id">
      <div class="list-con-imgs" :style="{backgroundImage:'url('+items.imgUrl+')'}">
        <div class="word">{{ items.theme }}</div>
      </div>
      <span class="detail">{{ items.desc }}</span>
      <div class="price">
        <span>￥</span>
        <span>{{ items.price}}</span>
        <span>起</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "ExitTravelTimeList",
      props:["listInfo"]
    }
</script>

<style scoped>
 .list{
   padding: 0 .12rem .1rem;
   display: -webkit-flex;
   -webkit-justify-content: space-between;
 }
  .list-con-imgs{
    width: 1.14rem;
    height: 1.14rem;
    border-radius: .04rem;
    position: relative;
  }
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
  span{
    display: block;
  }
  .detail{
    font-size: .13rem;
    line-height: .185rem;
    color: rgb(51, 51, 51);
    max-width: 1.14rem;
    margin: .1rem 0;
    height: .74rem;
  }
  .price{
    display: -webkit-flex;
    -webkit-align-items: flex-end;
  }
  .price span:nth-of-type(1){
    font-size: .12rem;
    height: .12rem;
    line-height: .12rem;
    color: rgb(255, 80, 0);
  }
 .price span:nth-of-type(2){
   font-size: .16rem;
   height: .16rem;
   line-height: .16rem;
   color: rgb(255, 80, 0);
   margin-left: .02rem;
 }
 .price span:nth-of-type(3){
   font-size: .12rem;
   height: .12rem;
   line-height: .12rem;
   color: rgb(153, 153, 153);
   margin-left: .02rem;
 }
</style>
