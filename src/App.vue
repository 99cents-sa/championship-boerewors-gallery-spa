<template>
  <div id="app">
    <div v-for="event in events.gallery" :key="event.name">
      {{/* event.name */}}
      {{/* event.items */}}  
      <h3>{{ event.name }}</h3>
       <img class="image" v-for="(image, i) in event.items" :src="'http://ec2-54-161-60-4.compute-1.amazonaws.com/uploads/' + image.filename " :key="i" @click="index = i">
  <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>
  </div>

  </div>
</template>

<script>

import EventGallery from './components/EventGallery'
import VueGallerySlideshow from 'vue-gallery-slideshow';
import axios from 'axios'
 
export default {
  name: 'app',
  data() {
    return {
        events:{
          gallery:[],
        },
      images: [
      'http://via.placeholder.com/600x600',
      'http://via.placeholder.com/600x600',
      'http://via.placeholder.com/600x600',
      'http://via.placeholder.com/600x600',
      'http://via.placeholder.com/600x600',
      'http://via.placeholder.com/600x600',
      'http://via.placeholder.com/600x600',
      'http://via.placeholder.com/600x600',
      'http://via.placeholder.com/600x600',
      'http://via.placeholder.com/600x600'
    ],
    index: null
      }
  },
  components: {
    'event-gallery':EventGallery,
     VueGallerySlideshow,
  },// Fetches posts when the component is created.
  mounted() {

  axios.get(`http://ec2-54-161-60-4.compute-1.amazonaws.com/api/events`)
  .then(response => {

    response.data.forEach((item) => {
      let galleryItem = {name: item.event_name, items: []};
       let url = `http://ec2-54-161-60-4.compute-1.amazonaws.com/api/events/${item.id}`
        axios.get(url).
        then(response => {
        galleryItem.items = response.data;
        this.events.gallery.push(galleryItem);
      })
    });
  })
  
    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.image {
  border-radius: 5%;
}
.row {
  display: -webkit-flex; /* Children instantly become flex items */
  -webkit-flex-direction: row; /* row - default, row-reverse, column, column-reverse  */
  -webkit-justify-content: space-between; /* space-between, flex-end, center  */
  -webkit-flex-wrap: wrap; /*  */
  width: 960px;
  margin: 0 auto;
}

</style>
