<template>
    <div class="header">
      <div class="headCon">
        <router-link to="/city">
          <span class="iconfont icon-dingweiweizhi">{{ this.$store.state.city }}</span>
        </router-link>
        <span class="iconfont icon-dayuhao"></span>
        <span class="iconfont icon-sousuo"></span>
        <span>目的地/景点关键字</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "TicketsHeader"
    }
</script>

<style scoped>
  .header {
    width: 100%;
    background: #ffd800;
    height: .44rem;
    display: -webkit-flex;
    -webkit-align-items: center; }
  .header .headCon {
    display: -webkit-flex;
    -webkit-align-items: center;
    width: 3.52rem;
    height: .32rem;
    margin: 0 auto;
    background: #fff7d4;
    border-radius: .16rem;
    border-top-right-radius: 0; }
  .header .headCon span {
    display: block;
    font-size: .13rem;
    color: #333333; }
  .header .headCon span:first-child {
    margin-left: .12rem; }
  .header .headCon span:nth-child(2) {
    margin: 0 6px; }
  .header .headCon span:last-child {
    color: #918e7e;
    margin-left: 8px; }
</style>
