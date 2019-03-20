<template>
  <div>
    <div class="header">
        <input v-model="keyword" class="headCon" type="text" placeholder="中文/拼音/首字母"/>
        <router-link to="/tickets">
          <span>返回</span>
        </router-link>
    </div>
    <div
      class="search-content"
      ref="search"
      v-show="keyword"
    >
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  import { mapMutations } from 'vuex'
    export default {
      name: "CityHeader",
      props: {
        cities: Object
      },
      data () {
        return {
          keyword: '',
          list: [],
          timer: null
        }
      },
      computed: {
        hasNoData () {
          return !this.list.length
        }
      },
      watch: {
        keyword () {
          if (this.timer) {
            clearTimeout(this.timer)
          }
          if (!this.keyword) {
            this.list = []
            return
          }
          this.timer = setTimeout(() => {
            const result = []
            for (let i in this.cities) {
              this.cities[i].forEach((value) => {
                if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                  result.push(value)
                }
              })
            }
            this.list = result
          }, 100)
        }
      },
      methods: {
        handleCityClick (city) {
          this.changeCity(city)
          this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
      },
      mounted () {
        this.scroll = new Bscroll(this.$refs.search)
      }
    }
</script>

<style scoped>
  .header {
    width: 100%;
    background: #ffd800;
    height: .44rem;
    display: -webkit-flex;
    -webkit-align-items: center;
    position: relative;
  }
  .header .headCon {
    display: -webkit-flex;
    -webkit-align-items: center;
    width: 3.52rem;
    height: .32rem;
    margin: 0 auto;
    background: #fff7d4;
    border-radius: .16rem;
    border-top-right-radius: 0;
    text-indent: .2rem;
    border: none;
    font-size: .14rem;
  }
  .header span {
    color: #918e7e;
    position: absolute;
    right: .2rem;
    bottom: .11rem;
    font-size: .14rem;
    }
  .search-content {
    z-index: 1;
    overflow: hidden;
    position: absolute;
    top: 0.9rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: #eee;
  }
  .search-item {
    line-height: .62rem;
    padding-left: .2rem;
    background: #fff;
    color: #666;
    font-size: .14rem;
  }
</style>
