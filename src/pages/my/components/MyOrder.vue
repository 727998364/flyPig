<template>
  <div class="myOrder-info">
    <div class="myOrder">
      <div class="title">
        <h2>我的订单</h2>
        <h5>全部订单</h5>
      </div>
      <div class="con">
        <index-icons :iconlist="orderList"></index-icons>
      </div>
    </div>
  </div>
</template>

<script>
  import IndexIcons from "../../index/components/IndexIcons"
  export default {
    name: "MyOrder",
    props:{
      orderList:Array
    },
    components:{
      IndexIcons
    }
  }
</script>

<style scoped>
  .myOrder-info{
    width: 100%;
  }
  .myOrder{
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
