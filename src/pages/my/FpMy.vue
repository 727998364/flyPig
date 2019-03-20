<template>
    <div>
      <my-header :headerInfo="headerInfo"></my-header>
      <MyOrder :orderList="orderList"></MyOrder>
      <my-tools :toolsList="toolsList"></my-tools>
      <my-playgames></my-playgames>
      <my-center :hyqyList="hyqyList"></my-center>
      <fp-common-foot></fp-common-foot>
    </div>
</template>

<script>
    import MyHeader from './components/MyHeader'
    import MyOrder from "./components/MyOrder"
    import MyTools from './components/MyTools'
    import MyPlaygames from "./components/MyPlaygames"
    import MyCenter from './components/MyCenter'
    import FpCommonFoot from '../../components/FpCommonFoot'
    import axios from "axios"
    export default {
      name: "FpMy",
      components:{
        MyHeader,
        MyOrder,
        MyTools,
        MyPlaygames,
        MyCenter,
        FpCommonFoot
      },
      data(){
        return{
          headerInfo:[],
          orderList:[],
          toolsList:[],
          hyqyList:[]
        }
      },
      methods:{
        getTicketsInfo(){
          axios.get('../../static/mock/my.json')
            .then(this.getTicketsInfoSucc)
        },
        getTicketsInfoSucc(res){
          res = res.data
          console.log(res)
          if(res.ret && res.data){
            const data = res.data
            this.headerImg = data.headerImg
            this.headerInfo = data.headerInfo
            this.orderList = data.orderList
            this.toolsList = data.toolsList
            this.hyqyList = data.hyqyList
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
