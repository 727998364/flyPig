<template>
  <div class="travel-theme" >
    <index-common-title :titleInfo="commonTitle.titleContent2"></index-common-title>
    <index-travel-theme-list v-if="travelList" :listInfo="travelList.travelTheme"></index-travel-theme-list>
  </div>
</template>

<script>
  import IndexCommonTitle from './IndexCommonTitle'
  import IndexTravelThemeList from './IndexTravelThemeList'
  export default {
    name: "IndexTravelTheme",
    props:["commonTitle","travelList"],
    components:{
      IndexCommonTitle,
      IndexTravelThemeList
    }
  }
</script>

<style scoped>
  .travel-theme {
    width: 100%; }
</style>
