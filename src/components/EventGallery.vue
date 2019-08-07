<template>
 <div>
   <h3>{{title}}</h3>
    <h3>{{gallery}}</h3>
   <swiper :options="swiperOption">
        <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide>
            <EventImage image="https://dummyimage.com/350/ffffff/000000"/>
          </swiper-slide>
          <swiper-slide>
            <EventImage image="https://dummyimage.com/350/ffffff/000000"/>
          </swiper-slide>
          <!-- more movies --> 
          <swiper-slide>
            <EventImage image="https://dummyimage.com/350/ffffff/000000"/>
          </swiper-slide>

          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </swiper>
 </div>
</template>

<script>
import EventImage from './EventImage'
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
    EventImage,
    swiper,
    swiperSlide,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiper-slide{
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.swiper-container {
  height : 450px;
  width : 100%;
}

</style>