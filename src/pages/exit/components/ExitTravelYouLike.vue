<template>
  <div class="youLike">
    <common-title :titlelist="titleinfo.titleList4"></common-title>
    <exit-travel-you-like-list :youlikeInfo="youlikelist"></exit-travel-you-like-list>
  </div>
</template>

<script>
    import CommonTitle from './CommonTitle'
    import ExitTravelYouLikeList from './ExitTravelYouLikeList'
    export default {
      name: "ExitTravelYouLike",
      props:["youlikelist","titleinfo"],
      components:{
        CommonTitle,
        ExitTravelYouLikeList

      }
    }
</script>

<style scoped>
 .youLike {
   background: #f6f6f6;
 }
 >>>.common-title{
   border-top: 0;
 }
</style>
