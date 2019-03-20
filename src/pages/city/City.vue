<template>
  <div>
    <city-header></city-header>
    <city-select :cities="cities"></city-select>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
  import CityHeader from "./components/CityHeader"
  import CitySelect from "./components/CitySelect"
  import CityList from "./components/CityList"
  import CityAlphabet from "./components/CityAlphabet"
  import axios from "axios"
  export default {
    name: "City",
    components:{
      CityHeader,
      CitySelect,
      CityList,
      CityAlphabet
    },
    data () {
      return {
        cities: {},
        hotCities: [],
        letter:''
      }
    },
    methods:{
      getTicketsInfo(){
        axios.get('./static/mock/city.json')
          .then(this.getTicketsInfoSucc)
      },
      getTicketsInfoSucc(res){
        res = res.data
        if(res.ret && res.data){
          const data = res.data
          this.cities = data.cities
          this.hotCities = data.hotCities
          // console.log(data)
        }
      },
      handleLetterChange (letter) {
        this.letter = letter
      }

    },
    mounted(){
      this.getTicketsInfo()
      // console.log("nihao")
    }
  }
</script>

<style lang="stylus" scoped>

</style>
