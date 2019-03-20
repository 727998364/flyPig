<template>
  <fp-footer :footerList="footerList" v-if="footerList"></fp-footer>
</template>

<script>
  import axios from "axios"
  import FpFooter from "./FpFooter"
  export default {
    name: "FpCommonFoot",
    components:{
      FpFooter
    },
    data(){
      return{
        footerList:[]
      }
    },
    methods:{
      getTicketsInfo(){
        axios.get('../../static/mock/footers.json')
          .then(this.getTicketsInfoSucc)
      },
      getTicketsInfoSucc(res){
        res = res.data
        console.log(res)
        if(res.ret && res.data){
          const data = res.data
          this.footerList = data.footerList
          console.log( this.footerList)
        }
      }
    },
    mounted() {
      this.getTicketsInfo()
    }
  }
</script>

<style scoped>

</style>
