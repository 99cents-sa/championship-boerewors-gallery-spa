<template>
  <div id="app" class="main-container">
    <div class="flex-container">
      <div v-for="(event, eIndex) in events.gallery" :key="event.name">
        <h3>{{ event.name }}</h3>
        <div class="event-container">
          <img class="image" v-for="(image, i) in event.items" :src="image.filename" :key="i" @click="index = i; eventIndex = eIndex">
        </div>
        <vue-gallery-slideshow :images="events.gallery[eventIndex].items.map((_item) => {return _item.filename})" :index="index" @close="index = null"></vue-gallery-slideshow>
      </div>
    </div>
  </div>
</template>
<script>
  import VueGallerySlideshow from 'vue-gallery-slideshow';
  import axios from 'axios'

  export default {
    name: 'app',
    data() {
      return {
        events: {
          gallery: []
        },
        index: null,
        eventIndex: 0
      }
    },
    components: {
      VueGallerySlideshow,
    },// Fetches posts when the component is created.
    mounted() {

      axios.get(`http://ec2-54-161-60-4.compute-1.amazonaws.com/api/events`)
          .then(response => {

            response.data.forEach((item) => {
              let galleryItem = {name: item.event_name, items: []};
              let url = `http://ec2-54-161-60-4.compute-1.amazonaws.com/api/events/${item.id}`;
              axios.get(url).then(response => {
                galleryItem.items = response.data.map((_entry) => {
                  _entry.filename = 'http://ec2-54-161-60-4.compute-1.amazonaws.com/uploads/' + _entry.filename;
                  return _entry
                });
                //console.log(galleryItem.items[0].filename);
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
    margin-right: 1rem;
    width: 15%;
    margin-bottom: 2%;
  }

  .flex-container {
    display: flex;
    justify-content: center; /* Add this */
    flex-direction: column;
  }

  .main-container {
    display: flex;
    justify-content: center;
  }

  .event-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

  }
</style>
