<template>
    <div class="myCenter">
      <div class="myCenter-con">
        <div class="title">
          <h2>会员权益</h2>
          <h5>更多</h5>
        </div>
        <div class="list-con">
          <div class="list" v-if="hyqyList" v-for="item of hyqyList">
            <img :src="item.imgUrl" alt="">
            <span>{{ item.desc }}</span>
            <span>{{ item.desc1 }}</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "MyCenter",
      props:{
        hyqyList:Array
      }
    }
</script>

<style scoped>
  .myCenter{
    width: 100%;
  }
  .myCenter-con{
    margin: .09rem .12rem .2rem;
    background: white;
    border-radius: .04rem;
    padding-bottom: .2rem;
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
  .list-con{
    display: -webkit-flex;
    -webkit-justify-content: space-between;
  }
  .list{
    text-align: center;
  }
  .list img{
    width: 1.03rem;
    height: .77rem;
  }
  .list span{
    display: block;
  }
  .list span:nth-of-type(1){
    max-width: 1.03rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-size: .14rem;
    color: #333;
    margin: .09rem auto .07rem;
  }
  .list span:nth-of-type(2){
    font-size: .14rem;
    color: white;
    width: .72rem;
    height: .21rem;
    background: #eec87b;
    border-radius: .1rem;
    margin: 0 auto;
  }
</style>
