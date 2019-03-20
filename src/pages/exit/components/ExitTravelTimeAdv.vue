<template>
    <div class="adv-list">
      <div class="adv-list-info" v-if="advInfo" :style="{backgroundImage:'url('+advInfo.advImg+')'}">
        <div class="adv-list-info-top">
          <div class="adv-list-info-top-left">
            <span>{{ advInfo.spec }}</span>
            <span>{{ advInfo.country }}</span>
          </div>
          <div class="adv-list-info-top-right">
            <span>{{ advInfo.moreGoods }}</span>
            <img :src="advInfo.moreImg" alt="">
          </div>
        </div>
        <div class="adv-list-info-btm">
          <span>
            {{ advInfo.desc }}
          </span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ExitTravelTimeAdv",
        props:["advInfo"]
    }
</script>

<style scoped>
  .adv-list{
    padding: 0 .12rem .1rem;
  }
  .adv-list-info{
    width: 3.51rem;
    height: 1.2rem;
    background-size: 3.51rem 1.2rem;
    border-radius: .04rem;
    background-color: rgba(0,0,0,0.3);
  }
  .adv-list-info-top{
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    padding-top: .32rem;
    margin: 0 .08rem;
  }
  .adv-list-info-top span{
    display: block;
  }
  .adv-list-info-top-left{
    display: -webkit-flex;
    -webkit-align-items: center;
    text-align: center;
  }
  .adv-list-info-top-left span:first-child{
    width: .6rem;
    height: .21rem;
    background:#ff612d;
    font-size: .14rem;
    color: white;
    border-radius: .12rem;
  }
  .adv-list-info-top-left span:last-child{
    font-size: .2rem;
    color: white;
    font-weight: bold;
  }
  .adv-list-info-top-right{
    display: -webkit-flex;
    -webkit-align-items: center;
  }
  .adv-list-info-top-right span{
    color: #ffc900;
    font-size: .14rem;
  }
  .adv-list-info-top-right img{
    width: .04rem;
    height: .08rem;
    margin-left: .02rem;
  }
  .adv-list-info-btm{
    margin: 0 .08rem;
  }
  .adv-list-info-btm span{
    display: block;
    font-size: .13rem;
    max-width: 3.33rem;
    line-height: .2rem;
    color: white;
  }
</style>
