<template>
  <div>
    <exit-travel-header :headinfo="headerInfo"></exit-travel-header>
    <tickets-icons :iconlist="iconList"></tickets-icons>
    <exit-travel-hot :hotlist="hotList" :titleinfo="commonTitle"></exit-travel-hot>
    <exit-travel-adv :advlist="advList"></exit-travel-adv>
    <exit-travel-newplay :playlist="playList" :titleinfo="commonTitle"></exit-travel-newplay>
    <exit-travel-time :travelTimeInfo="travelTimeInfo" :titleinfo="commonTitle"></exit-travel-time>
    <exit-travel-you-like :youlikelist="youLikeList" :titleinfo="commonTitle"></exit-travel-you-like>
  </div>
</template>

<script>
  import ExitTravelHeader from './components/ExitTravelHeader'
  import TicketsIcons from '../tickets/components/TicketsIcons'
  import ExitTravelHot from './components/ExitTravelHot'
  import ExitTravelAdv from './components/ExitTravelAdv'
  import ExitTravelNewplay from './components/ExitTravelNewplay'
  import ExitTravelTime from './components/ExitTravelTime'
  import ExitTravelYouLike from './components/ExitTravelYouLike'
  import axios from "axios"
  export default {
    name: "ExitTravel",
    components:{
      ExitTravelHeader,
      TicketsIcons,
      ExitTravelHot,
      ExitTravelAdv,
      ExitTravelNewplay,
      ExitTravelTime,
      ExitTravelYouLike
    },
    data(){
      return{
        headerInfo:{},
        iconList:[],
        commonTitle:{},
        titleList1:{},
        hotList:[],
        advList:{},
        titleList2:{},
        playList:[],
        travelTimeInfo:{},
        titleList3:{},
        month:[],
        day:[],
        adv:{},
        list:[],
        titleList4:{},
        youLikeList:[]
      }
    },
    methods:{
      getIndexInfo(){
        axios.get('./static/mock/exittravel.json')
          .then(this.getIndexInfoSucc)
      },
      getIndexInfoSucc(res){
        res = res.data
        if(res.ret && res.data){
          const data = res.data
          this.headerInfo = data.headerInfo,
          this.iconList = data.iconList
          this.commonTitle = data.commonTitle
          this.titleList1 = data.commonTitle.titleList1
          this.hotList = data.hotList
          this.advList = data.advList
          this.titleList2 = data.commonTitle.titleList2
          this.playList = data.playList
          this.titleList3 = data.commonTitle.titleList3
          this.travelTimeInfo = data.travelTimeInfo
          this.month = data.travelTimeInfo.month
          this.day = data.travelTimeInfo.day
          this.adv = data.travelTimeInfo.adv
          this.list = data.travelTimeInfo.list
          this.titleList4 = data.commonTitle.titleList4
          this.youLikeList = data.youLikeList
          console.log(this.titleList4)
        }
      },

    },
    mounted(){
      this.getIndexInfo()
      // console.log("nihao")
      console.log(this.youLikeList)
    }
  }
</script>

<style scoped>

</style>
