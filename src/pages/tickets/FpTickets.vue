<template>
  <div>
    <tickets-header> </tickets-header>
    <tickers-swiper :swiperList="swiperList"></tickers-swiper>
    <tickets-icons :iconlist="iconList"></tickets-icons>
    <tickets-section  v-if="flag" :spotlist="spotList"></tickets-section>
  </div>
</template>

<script>
    import TicketsHeader from "./components/TicketsHeader"
    import TickersSwiper from "./components/TicketsSwiper"
    import TicketsIcons from "./components/TicketsIcons"
    import TicketsSection from "./components/TicketsSection"
    import axios from "axios"
    export default {
      name: "FpTickets",
      components:{
        TicketsHeader,
        TickersSwiper,
        TicketsIcons,
        TicketsSection
      },
      data (){
        return{
          flag:true,
          swiperList:[],
          iconList:[],
          spotList:[]
        }
      },
      methods:{
        getTicketsInfo(){
          axios.get('./static/mock/tickets.json')
            .then(this.getTicketsInfoSucc)
        },
        getTicketsInfoSucc(res){
          res = res.data
          if(res.ret && res.data){
            const data = res.data
            this.swiperList = data.swiperList
            this.iconList = data.iconList
            this.spotList = data.spotList
            // console.log(this.swiperList)
            console.log(this.spotList)
          }
        },

      },
      mounted(){
        this.getTicketsInfo()
        // console.log("nihao")
      }
    }
</script>

<style scoped>

</style>
