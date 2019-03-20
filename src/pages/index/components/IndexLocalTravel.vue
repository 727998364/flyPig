<template>
  <div class="local-travel" >
    <index-common-title :titleInfo="commonTitle.titleContent1"></index-common-title>
    <index-local-travel-list v-if="travelList" :listInfo="travelList.localTravel"></index-local-travel-list>
  </div>
</template>

<script>
    import IndexCommonTitle from './IndexCommonTitle'
    import IndexLocalTravelList from './IndexLocalTravelList'
    export default {
        name: "IndexLocalTravel",
        props:["commonTitle","travelList"],
        components:{
          IndexCommonTitle,
          IndexLocalTravelList
        }
    }
</script>

<style scoped>
  .local-travel {
    width: 100%; }
</style>
