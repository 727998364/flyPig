<template>
  <div class="myTools-info">
    <div class="myTools">
      <div class="title">
        <h2>我的工具</h2>
      </div>
      <div class="tools-con">
        <tickets-icons :iconlist="toolsList"></tickets-icons>
      </div>
    </div>
  </div>
</template>

<script>
  import TicketsIcons from "../../tickets/components/TicketsIcons"
  export default {
    name: "MyTools",
    props:{
      toolsList:Array
    },
    components:{
      TicketsIcons
    }
  }
</script>

<style scoped>
  .myTools-info{
    width: 100%;
  }
  .myTools{
    margin: .09rem .12rem;
    background: white;
    border-radius: .04rem;
    padding-bottom: .12rem;
  }
  .title{
    padding: 0 .12rem;
    display: -webkit-flex;
    -webkit-align-items: center;
    -webkit-justify-content: space-between;
    height: .4rem;
  }
  .title h2{
    font-size: .15rem;
    color: #333;
  }
  .title h5{
    font-size: .14rem;
    color: #999;
    font-weight: normal;
  }
</style>
