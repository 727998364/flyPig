<template>
    <div class="city-list" ref="wrapper">
      <div class="city-list-info">
        <div class="city-list-con">
          <div class="title">定位</div>
          <div class="button-list">
            <div class="button-wrap">
              <div class="button">{{ this.$store.state.city }}</div>
            </div>
          </div>
        </div>
        <div class="city-list-con">
          <div class="title">热门城市</div>
          <div class="button-list">
            <div class="button-wrap"
                 v-for="item of hot"
                 :key="item.id"
                 @click="handleCityClick(item.name)"
            >
              <div class="button">{{ item.name }}</div>
            </div>
          </div>
        </div>
        <div class="border-topbottom"
             v-for="(item,index) of cities"
             :key="index"
             :ref="index"
        >
          <div class="title" >{{ index }}</div>
          <div class="item-list">
            <div class="item"
                 v-for="key of item"
                 :key="key.id"
                 @click="handleCityClick(key.name)"
            >
              {{ key.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  export default {
    name: "CityList",
    props:{
      cities:Object,
      hot:Array,
      letter:String
    },
    methods: {
      handleCityClick (city) {
        this.$store.dispatch('changeCity',city)
        this.$router.push("/tickets")
      },
    },
    watch: {
      letter () {
        if (this.letter) {
          const element = this.$refs[this.letter][0]
          this.scroll.scrollToElement(element)
        }
      }
    },
    mounted () {
      this.scroll = new Bscroll(this.$refs.wrapper)
      }
    }
</script>

<style scoped>
  .title{
    line-height: .2rem;
    padding-left: .2rem;
    font-size: .14rem;
    color: #333;
    margin-bottom: .08rem;
  }
  .city-list{
    overflow: hidden;
    position: absolute;
    top: 1rem;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .city-list-con{
    margin: .06rem 0;
  }
  .button-list{
    overflow: hidden;
  }
  .button-list {
    display: -webkit-flex;
    flex-wrap: wrap;
  }
  .button{
    width:.79rem;
    height: .32rem;
    line-height: .32rem;
    font-size: .14rem;
    color: #333;
    background: white;
    text-align: center;
    margin: .04rem;
  }
  .item-list .item{
    line-height: .44rem;
    color: #333;
    padding-left: .2rem;
    font-size: .14rem;
    background: white;
    border-bottom: .005rem solid rgb(241, 241, 241);
  }
</style>
