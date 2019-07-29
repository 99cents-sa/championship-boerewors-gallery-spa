<template>
  <div id="app"  class="row cf">

    <div v-for="event in events">
      {{event}}
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
        events:{
          gallery:[],
        },
      }
  },
  components: {
    'event-gallery':EventGallery,
  },// Fetches posts when the component is created.
  mounted() {

  axios.get(`http://ec2-54-161-60-4.compute-1.amazonaws.com/api/events`)
  .then(response => {

    response.data.forEach((item) => {
      console.log("found: ", item)
      //console.log("found id: ", item.id)
       let url = `http://ec2-54-161-60-4.compute-1.amazonaws.com/api/events/${item.id}`
        axios.get(url).
        then(response => {
        //console.log("found: ", item.event_name);
        console.log(this.events.gallery);
        this.events.gallery.push(response.data);
        
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

.row {
  display: -webkit-flex; /* Children instantly become flex items */
  -webkit-flex-direction: row; /* row - default, row-reverse, column, column-reverse  */
  -webkit-justify-content: space-between; /* space-between, flex-end, center  */
  -webkit-flex-wrap: wrap; /*  */
  width: 960px;
  margin: 0 auto;
}

</style>
