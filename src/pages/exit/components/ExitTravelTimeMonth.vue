<template>
    <div class="travel-month">
      <div class="travel-month-con" v-if="monthInfo" v-for="item of monthInfo" :key="item.id">
        <div class="travel-month-list">
          <span>{{ item.detail }}</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "ExitTravelTimeMonth",
      props:["monthInfo"]
    }
</script>

<style scoped>
  .travel-month{
    width: 100%;
    display: -webkit-flex;
    margin-top: .3rem;
  }
 .travel-month-con{
   display: -webkit-flex;
 }
  .travel-month-list{
    height: .31rem;
    width: 1.25rem;
  }
 .travel-month-list span{
   display: block;
   font-size: .18rem;
   text-align: center;
   color: rgb(51, 51, 51);
 }
</style>
