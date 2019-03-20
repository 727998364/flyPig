<template>
  <div class="footer">
    <a href="##"
       v-if="footerList"
       v-for="(item,index) of footerList"
       :key="item.id"
    >
      <img :src="item.imgUrl" alt="" />
      <span>{{ item.desc}}</span>
    </a>
  </div>
</template>
<script>
  export default {
    name: "FpFooter",
    props:{
      footerList:Array
    }
  }
</script>

<style scoped>
  .footer {
    width: 100%;
    height: .5rem;
    background: white;
    border-top: 1px solid #b2b2b2;
    display: -webkit-flex;
    padding-bottom: .1rem; }

  .footer a {
    -webkit-flex: 1;
    text-align: center; }

  .footer a img {
    width: .33rem;
    height: .32rem;
    margin: 0 auto;
    margin-top: .08rem; }

  .footer a span {
    display: block;
    color: #676767;
    font-size: 10px;
    line-height: 10px; }
</style>
