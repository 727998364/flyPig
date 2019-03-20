<template>
  <div>
      <index-header :data="headerInfo"></index-header>
      <index-icons :iconlist="indexIconInfo"></index-icons>
      <index-meau :meaulist="meauList"></index-meau>
      <index-local-travel :commonTitle="commonTitle" :travelList="travelList"></index-local-travel>
      <index-travel-theme :commonTitle="commonTitle" :travelList="travelList"></index-travel-theme>
      <index-travel-live :commonTitle="commonTitle" :travelList="travelList"></index-travel-live>
      <index-you-like :commonTitle="commonTitle" :youlikelist="youLikeList"></index-you-like>
      <fp-common-foot></fp-common-foot>
  </div>

</template>

<script>
    import IndexHeader from './components/IndexHeader'
    import IndexIcons from './components/IndexIcons'
    import IndexMeau from './components/IndexMeau'
    import IndexLocalTravel from './components/IndexLocalTravel'
    import IndexTravelTheme from './components/IndexTravelTheme'
    import IndexTravelLive from './components/IndexTravelLive'
    import IndexYouLike from './components/IndexYouLike'
    import FpCommonFoot from '../../components/FpCommonFoot'
    import axios from "axios"
    export default {
      name: "Index",
      components:{
        IndexTravelTheme,
          IndexHeader,
          IndexIcons,
          IndexMeau,
          IndexLocalTravel,
          IndexTravelLive,
          IndexYouLike,
          FpCommonFoot
        },
      data(){
        return{
          headerInfo:{},
          swiperList:[],
          indexIconInfo:[],
          meauList:[],
          commonTitle:{},
          travelList:{},
          titleContent1:{},
          localTravel:{},
          titleContent2:{},
          travelTheme:{},
          titleContent3:{},
          travelLive:{},
          titleContent4:{},
          youLikeList:[]
        }
      },
      methods:{
        getIndexInfo(){
          axios.get('./static/mock/index.json')
            .then(this.getIndexInfoSucc)
        },
        getIndexInfoSucc(res){
          res = res.data
          if(res.ret && res.data){
            const data = res.data
            this.headerInfo = data.headerInfo
            this.swiperList = data.headerInfo.swiperList
            this.indexIconInfo = data.indexIconInfo
            this.meauList = data.meauList
            this.commonTitle=data.commonTitle
            this.travelList = data.travelList
            this.titleContent1 = data.commonTitle.titleContent1
            this.localTravel = data.travelList.localTravel
            this.titleContent2 = data.commonTitle.titleContent2
            this.travelTheme = data.travelList.travelTheme,
            this.titleContent3 = data.commonTitle.titleContent3
            this.travelLive = data.travelList.travelLive
            this.titleContent4 = data.commonTitle.titleContent4
            this.youLikeList = data.youLikeList
            // console.log(this.swiperList)
            // console.log(this.spotList)
          }
        },

      },
      mounted(){
        this.getIndexInfo()
        // console.log("nihao")
      }
    }
</script>

<style scoped>

</style>
