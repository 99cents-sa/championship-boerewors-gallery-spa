<template>
  <div id="app">
   <div v-if="events && events.length">
    <div v-for="event of events" :key="event.id">
      <p><strong>{{event.event_name}}</strong></p>
       <p><strong>Loading....</strong></p>
        <event-gallery></event-gallery>
    </div>
  </div>
     <div>
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
    ></div>
  </div>
  </div>
</template>

<script>



import VueGallery from 'vue-gallery'
import EventGallery from './components/EventGallery'
import axios from 'axios'
  
export default {
  name: 'app',
  data() {
    return {
        images: [
          'https://dummyimage.com/600/ffffff/000000',
          'https://dummyimage.com/600/ffffff/000000',
          'https://dummyimage.com/600/000000/ffffff',
          'https://dummyimage.com/600/000000/ffffff',
        ],
        events:[],
        index: null
      }
  },
  components: {
    'gallery': VueGallery,
    'event-gallery':EventGallery,
  },// Fetches posts when the component is created.
  created() {
    axios.get(`http://127.0.0.1:8000/api/events`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.events = response.data;

    })
    .catch(e => {
      this.errors.push(e)
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
  mounted () {
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
 .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
</style>
