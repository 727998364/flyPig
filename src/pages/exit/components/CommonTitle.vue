<template>
    <div class="common-title">
      <div class="common-title-con" v-if="titlelist">
        <h1>{{ titlelist.title }}</h1>
        <h5>|</h5>
        <h5>{{ titlelist.desc }}</h5>
      </div>
    </div>
</template>

<script>
    export default {
        name: "CommonTitle",
        props:["titlelist"]
    }
</script>

<style scoped>
  .common-title{
    width: 100%;
  }
  .common-title-con{
    height:.42rem;
    margin: 0 .1rem;
    display: -webkit-flex;
    border-top: 1px solid #ccc;
    -webkit-align-items: flex-end;
  }
  .common-title-con h1{
    font-size: .21rem;
    line-height: .21rem;
    color: rgb(51, 51, 51);
  }
  .common-title-con h5{
    font-size: .13rem;
    margin-left: .085rem;
    color: rgb(153, 153, 153);
    font-weight: normal;
  }
</style>
