<template>
    <div class="city-select">
      <div class="city-select-con">
        <div class="city-select-list">
          <h2>国内(含港澳台)</h2>
        </div>
        <div class="city-select-list">
          <h2>国际</h2>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "CitySelect"
    }
</script>

<style scoped>
  .city-select{
    width: 100%;
    background: white;
    text-align: center;
  }
  .city-select-con{
    height :.43rem;
    display:-webkit-flex;
    -webkit-align-items: center;
  }
  .city-select-list{
    width: 50%;
  }
  .city-select-list h2{
    line-height: .43rem;
    font-size: .15rem;
    color: rgb(51, 51, 51);
    font-weight: normal;
  }
  .city-select-list:first-child{
    border-bottom: 3px solid rgb(255, 219, 0);
  }
</style>
