<template>
  <div class="meauLink iconList">
    <div class="meau">
      <a href="javascript:;" v-for="item of iconlist" :key="item.id">
        <img :src="item.imgUrl" alt=""/>
        <span>{{ item.desc }}</span>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "TicketsIcons",
        props:["iconlist"],
    }
</script>

<style scoped>
  .meauLink {
    width: 100%;
    background: white;
    padding-bottom: .1rem; }
  .meauLink .meau {
    display: -webkit-flex;
    -webkit-flex-wrap: wrap; }
  .meauLink .meau a {
    text-align: center;
    width: 20%;
    margin-top: .1rem; }
  .tools-con .meau a{
    width: 25%;
  }
  .meauLink .meau a img {
    width: .43rem;
    height: .43rem;
    margin: 0 auto; }
  .meauLink .meau a span {
    display: block;
    color: #6d6d6d;
    font-size: .12rem;
    line-height: .12rem;
    margin-top: .06rem; }
  .iconList a{
    margin-bottom: .18rem;
  }
  .iconList a:nth-of-type(n+6) img{
    width:.18rem;
    height: .2rem;
  }
  .tools-con .meau a img{
    width: .34rem;
    height: .28rem;
  }
</style>
