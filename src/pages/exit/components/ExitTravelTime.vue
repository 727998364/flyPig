<template>
    <div class="exit-travel-time-total">
      <common-title :titlelist="titleinfo.titleList3"></common-title>
      <exit-travel-time-month :monthInfo="travelTimeInfo.month"></exit-travel-time-month>
      <exit-travel-time-day :dayInfo="travelTimeInfo.day"></exit-travel-time-day>
      <exit-travel-time-adv :advInfo="travelTimeInfo.adv"></exit-travel-time-adv>
      <exit-travel-time-list :listInfo="travelTimeInfo.list"></exit-travel-time-list>
    </div>
</template>

<script>
    import ExitTravelTimeMonth from './ExitTravelTimeMonth'
    import ExitTravelTimeDay from './ExitTravelTimeDay'
    import ExitTravelTimeAdv from './ExitTravelTimeAdv'
    import ExitTravelTimeList from './ExitTravelTimeList'
    import CommonTitle from "./CommonTitle";
    export default {
        name: "ExitTravelTime",
        props:["travelTimeInfo","titleinfo"],
        components:{
          CommonTitle,
          ExitTravelTimeMonth,
          ExitTravelTimeDay,
          ExitTravelTimeAdv,
          ExitTravelTimeList
        }
    }
</script>

<style scoped>
  .exit-travel-time-total{
    width: 100%;
    background: white;
  }
</style>
