<template>
  <div id="app">
   <div v-if="events && events.length">
    <div v-for="event of events" :key="event.id">
        <event-gallery :title="event.event_name" :gallery="event.gallery"></event-gallery>
    </div>
  </div>
    
  </div>
</template>

<script>

import EventGallery from './components/EventGallery'
import axios from 'axios'
 
export default {
  name: 'app',
  data() {
    return {
        events:[],
      }
  },
  components: {
    'event-gallery':EventGallery,
  },// Fetches posts when the component is created.
  created() {

  axios.get(`http://ec2-54-161-60-4.compute-1.amazonaws.com/api/events`)
  .then(response => {
    this.events = response.data;
    this.events.forEach((item) => {
      //console.log("found: ", item)
      //console.log("found id: ", item.id)
       let url = `http://ec2-54-161-60-4.compute-1.amazonaws.com/api/events/${item.id}`
        axios.get(url).
        then(response => {
        console.log(response.data)
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
