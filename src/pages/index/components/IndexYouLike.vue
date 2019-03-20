<template>
  <div class="you-like" >
    <index-common-title :titleInfo="commonTitle.titleContent4"></index-common-title>
    <index-you-like-list v-if="youlikelist" :listInfo="youlikelist"></index-you-like-list>
  </div>
</template>

<script>
  import IndexCommonTitle from './IndexCommonTitle'
  import IndexYouLikeList from './IndexYouLikeList'
  export default {
    name: "IndexYouLike",
    props:["commonTitle","youlikelist"],
    components:{
      IndexCommonTitle,
      IndexYouLikeList
    }
  }
</script>

<style scoped>
  .you-like {
    width: 100%; }
</style>
