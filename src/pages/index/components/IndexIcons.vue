<template>
  <div class="meauLink">
    <div class="meau">
      <a @click.prevent.stop v-for="item of iconlist" :key="item.id">
        <router-link :to="item.url">
          <img :src="item.imgUrl" alt=""/>
          <span>{{ item.desc }}</span>
        </router-link>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "IndexIcons",
        props:["iconlist"],
    }
</script>

<style scoped>
  .meauLink {
    width: 100%; }
  .meauLink .meau {
    display: -webkit-flex;
    padding: .12rem; }
  .meauLink .meau a {
    text-align: center;
    width: 20%; }
  .meauLink .meau a img {
    width: .7rem;
    height: .42rem;
    margin: 0 auto; }
  .meauLink .meau a span {
    display: block;
    color: #333;
    font-size: .12rem;
    line-height: .12rem; }
.con .meau a img{
    width: .32rem;
    height: .27rem;
    margin-bottom: .06rem;
  }
</style>
