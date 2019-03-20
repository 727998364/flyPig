<template>
    <div class="hot">
      <common-title :titlelist="titleinfo.titleList1"></common-title>
      <exit-travel-hot-list :hotlist="hotlist"></exit-travel-hot-list>
    </div>
</template>

<script>
    import CommonTitle from './CommonTitle'
    import ExitTravelHotList from './ExitTravelHotList'
    export default {
        name: "ExitTravelHot",
        props:["hotlist","titleinfo"],
        components:{
          CommonTitle,
          ExitTravelHotList
        }
    }
</script>

<style scoped>
  .hot{
    background: white;
  }
</style>
