<template>
  <div class="travel-theme" >
    <index-common-title :titleInfo="commonTitle.titleContent3"></index-common-title>
    <index-travel-live-list v-if="travelList" :listInfo="travelList.travelLive"></index-travel-live-list>
  </div>
</template>

<script>
  import IndexCommonTitle from './IndexCommonTitle'
  import IndexTravelLiveList from './IndexTravelLiveList'
  export default {
    name: "IndexTravelLive",
    props:["commonTitle","travelList"],
    components:{
      IndexCommonTitle,
      IndexTravelLiveList
    }
  }
</script>

<style scoped>
  .travel-live {
    width: 100%; }
</style>
