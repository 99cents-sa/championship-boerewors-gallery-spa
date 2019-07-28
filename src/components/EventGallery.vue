<template>
 <div>
   <h3>{{title}}</h3>
    <h3>{{gallery}}</h3>
   <swiper :options="swiperOption">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
 </div>
</template>

<script>

import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'EventGallery',  
  data() {
    return {
        swiperOption: {
            direction : 'horizontal',
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets'
            },
          }
      }
  },
  props: {
    title: String,
    gallery: Array,
  },
  components: {
    swiper,
    swiperSlide,
  }
}
</script>