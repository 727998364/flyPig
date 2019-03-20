<template>
  <div class="travel-day">
    <div class="travel-day-con" v-if="dayInfo" v-for="item of dayInfo" :key="item.id">
      <div class="travel-day-list">
        <span>{{ item.detail }}</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ExitTravelTimeDay",
        props:["dayInfo"]
    }
</script>

<style scoped>
  .travel-day{
    width: 100%;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
  }
  .travel-day-con{
    padding: .16rem .12rem;
  }
  .travel-day-list{
    height: .32rem;
    width: .9rem;
    background: #f1f1f1;
    border-radius: .16rem;
    line-height: .32rem;
  }
  .travel-day span{
    display: block;
    font-size: .18rem;
    text-align: center;
    color: rgb(51, 51, 51);
  }
</style>
