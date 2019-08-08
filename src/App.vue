<template>
  <div id="app" class="container">
    <div v-for="(event, eIndex) in events.gallery" :key="event.name">
      <div class="gallery-header" v-if="event.items.length">
        <h3>{{ event.name }}</h3>
        <div class="view-all" @click="index = 0; eventIndex = eIndex">View all ({{event.items.length}})</div>
      </div>
      <div class="event-description" v-html="event.description">
      </div>
      <div v-if="event.items.length" class="event-container">
        <div class="image-container" v-for="(image, i) in event.items.slice(0,maxItems)" :key="i" @click="index = i; eventIndex = eIndex">
          <img class="image" :src="image.filename">
        </div>
      </div>
      <vue-gallery-slideshow :images="events.gallery[eventIndex].items.map((_item) => {return _item.filename})" :index="index" @close="index = null"></vue-gallery-slideshow>
    </div>
  </div>
</template>
<script>
  import VueGallerySlideshow from 'vue-gallery-slideshow';
  import axios from 'axios'
  /* eslint-disable */

  export default {
    name: 'app',
    data() {
      return {
        events: {
          gallery: []
        },
        index: null,
        eventIndex: 0,
        maxItems: 6
      }
    },
    components: {
      VueGallerySlideshow,
    },

    created() {
      this.maxItems = Modernizr && Modernizr.touchevents && Modernizr.mq('(max-width: 460px)') ? 2 : 6;
    },
    mounted() {
      let allPromises = [];
      axios.get(`http://ec2-54-161-60-4.compute-1.amazonaws.com/api/events`)
      .then(response => {
        response.data.forEach((item) => {
          let galleryItem = {name: item.event_name, description: item['event_description'],  id: item.id, created: item['created_at'], items: []};
          let url = `http://ec2-54-161-60-4.compute-1.amazonaws.com/api/events/${item.id}`;
          let getPromise = axios.get(url);
          allPromises.push(getPromise);
          this.events.gallery.push(galleryItem);
        });

        Promise.all(allPromises).then((_galleries) => {
          let _count = 0;
          _galleries.forEach((_gallery, _index) => {
            console.log(_gallery);
            try {
              _gallery.data.forEach(_entry => {
                _entry.filename = 'http://ec2-54-161-60-4.compute-1.amazonaws.com/uploads/' + _entry.filename;
              });
              this.events.gallery[_count].items = _gallery.data;
              console.log(this.events.gallery);
              _count++;
            } catch(e) {
              // No entries
            }
          });
          // Sort
          this.events.gallery = this.events.gallery.sort((a,b) => {
            let aDate = new Date(a.created);
            let bDate = new Date(b.created);
            return aDate < bDate ? 1 : -1;
          });
        })
      })
    },
  }
</script>
<style lang="less">
  @smart-phone: ~'only screen and (max-width: 767px)';

  body, html {
    padding: 0;
    margin: 0;
  }

  #app {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .view-all {
    cursor: pointer;
    text-decoration: underline;
  }

  .gallery-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .container {
    max-width: 1280px;
    margin: auto;
    padding: 0 30px;

    @media @smart-phone {
        padding: 0 20px;
    }
  }


  .event-container {
    display: flex;
    justify-content: space-between;
  }

  .image-container {
    width: 15.5%;

    @media @smart-phone {
      width: 48%;
    }
  }

  .image {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    cursor: pointer;
    border-radius: 8px;
  }


.vgs__gallery {
    top: 48em !important;
}

.text-container {
  display: flex;
  flex-flow: row wrap;
}

  .event-description {
    margin-bottom: 30px;
  }
</style>
