<template>
    <div class="hot-list">
      <div class="hot-list-con" v-if="hotlist" v-for="items of hotlist" :key="items.id">
        <div class="hot-list-con-left" :style="{backgroundImage:'url('+items.imgUrl+')'}">

        </div>
        <div class="hot-list-con-right">
          <h2>{{ items.title }}</h2>
          <span>{{ items.desc }}</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ExitTravelHotList",
        props:["hotlist"]
    }
</script>

<style scoped>
 .hot-list{
   width: 100%;
   background: white;
   display: -webkit-flex;
   -webkit-flex-wrap:wrap;
 }
 .hot-list-con{
   padding: .2rem 0 .2rem .12rem;
   box-sizing: border-box;
   display: -webkit-flex;
 }
  .hot-list-con-left{
    width: .6rem;
    height: .6rem;
    border-radius: .04rem;
  }
 .hot-list-con-right{
   margin-left: .05rem;
 }
 .hot-list-con-right h2{
   font-size: .15rem;
   color: rgb(51, 51, 51);
   margin: .06rem 0 .06rem;
 }
  .hot-list-con-right span{
    display: block;
    border: 0.5px solid rgb(153, 153, 153);
    font-size: .11rem;
    color: rgb(153, 153, 153);
    border-radius: .02rem;
    padding: 0.01rem 0.03rem;
  }
</style>
