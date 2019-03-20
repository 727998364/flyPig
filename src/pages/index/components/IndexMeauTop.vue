<template>
  <div class="meauList-con" v-if="meaudata">
      <a @click.prevent.stop class="meauList-con-title" v-for="item of meaudata" :key="item.id">
        <router-link :to="item.url">
          <span>{{ item.title }}</span>
          <span>{{ item.desc }}</span>
        </router-link>
      </a>
  </div>
</template>

<script>
    export default {
        name: "IndexMeauTop",
        props:["meaudata"]
    }
</script>

<style scoped>
 .meauList-con {
    background: white;
    margin: 0 .12rem .12rem .12rem;
    display: -webkit-flex;
    -webkit-flex-wrap: wrap;
    border-radius: .08rem; }
 .meauList-con .meauList-con-title {
    box-sizing: border-box;
    width: 25%;
    display: block;
    padding-top: .16rem;
    padding-bottom: .1rem;
    text-align: center;
    border-bottom: 1px solid #f4f4f4;
    border-right: 1px solid #f4f4f4; }
 .meauList-con .meauList-con-title span {
    display: block; }
 .meauList-con .meauList-con-title span:first-child {
    font-size: .14rem;
    line-height: .14rem;
    font-weight: 500;
    color: #333;
    margin-bottom: .1rem; }
 .meauList-con .meauList-con-title span:last-child {
    font-size: .12rem;
    line-height: .12rem;
    color: #666; }
 .meauList-con .meauList-con-title:nth-of-type(4n) {
    border-right: 0; }
 .meauList-con .meauList-con-active {
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    padding: .13rem; }
 .meauList-con .meauList-con-active a {
    display: -webkit-flex;
    -webkit-align-items: center; }
 .meauList-con .meauList-con-active a span {
    color: #333333;
    font-size: .13rem;
    display: block;
    margin-left: .1rem; }
 .meauList-con .meauList-con-active a:nth-of-type(1) img {
    width: .77rem;
    height: .25rem; }
 .meauList-con .meauList-con-active a:nth-of-type(2) {
    margin-left: .12rem; }
 .meauList-con .meauList-con-active a:nth-of-type(2) img {
    width: .56rem;
    height: .25rem; }
</style>
