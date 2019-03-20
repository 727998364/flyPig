<template>
    <div class="adv-list" v-if="advlist">
      <div class="adv-list-con" :style="{backgroundImage:'url('+advlist.imgUrl+')'}">

      </div>
    </div>
</template>

<script>
    export default {
        name: "ExitTravelAdv",
        props:["advlist"]
    }
</script>

<style scoped>
 .adv-list{
   width: 100%;
   padding: .2rem 0 .12rem;
   background: white;
 }
  .adv-list-con{
    width:3.51rem;
    height: .6rem;
    margin: 0 auto;
    background-size: cover;
  }
</style>
