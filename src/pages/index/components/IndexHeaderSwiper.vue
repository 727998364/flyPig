<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper" >
      <!-- slides -->
      <swiper-slide v-for="item  of swiperlist" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name:"IndexHeaderSwiper",
    props:[ "swiperlist"],
    data () {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          loop: true,
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false
          },
        }
      }
    },
    mounted() {
    }
  }
</script>
<style scoped>
  .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: -17px;
    left: 107px;
  }
  .wrapper>>>.swiper-pagination-bullet{
    width: 6px;
    height: 6px;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .wrapper>>>.swiper-pagination-bullet-active {
    background: yellow;
  }
  .swiper-img{
    width: 100%;
    border-radius: 0.06rem;
  }
</style>
