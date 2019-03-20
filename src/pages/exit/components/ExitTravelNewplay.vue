<template>
  <div class="newPlay">
    <common-title :titlelist="titleinfo.titleList2"></common-title>
    <exit-travel-newplay-list :listInfo="playlist"></exit-travel-newplay-list>
  </div>
</template>

<script>
  import CommonTitle from './CommonTitle'
  import ExitTravelNewplayList from './ExitTravelNewplayList'
    export default {
        name: "ExitTravelNewplay",
        props:["playlist","titleinfo"],
        components:{
          CommonTitle,
          ExitTravelNewplayList
        }
    }
</script>

<style scoped>
  .newPlay{
    background: white;
  }
</style>
