<template>
  <div id="app" >
    <section class="headline">
      Photo Gallery
    </section>
    <div class="container" v-for="(event, eIndex) in events.gallery" :key="event.name">
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
  /* eslint-disable */

  export default {
    name: 'app',
    data() {
      return {
        events: {
          gallery: []
        },
        imageStrategy: [
          ''
        ],
        index: null,
        eventIndex: 0,
        maxItems: 6,
        firstCall: [
          {
            "id": 10,
            "event_name": "2016",
            "created_at": "2019-08-07 07:02:07",
            "updated_at": "2019-08-07 09:06:37",
            "event_description": "South Africa’s 2016 Championship Boerewors winner was crowned on Robben Island on 15 September 2016. The boerewors recipe of Olivier Kritzinger from Joubertina was revealed as #SAsNo1, following an exciting charity rugby match! The other two Championship Boerewors finalists were Vukile Vincent Cele from Durban and Winter Reaobaka Letlhogile from Kimberley. All three finalists received gift hampers sponsored by Coca-Cola, All Gold and Simba. They also received in-store vouchers from Shoprite and Checkers.",
            "numberOfImages": 16
          },
          {
            "id": 11,
            "event_name": "2017",
            "created_at": "2019-08-07 07:17:42",
            "updated_at": "2019-08-07 09:06:50",
            "event_description": "South Africa’s 2017 Championship Boerewors winners were announced in Cape Town on 22 July 2017. Queen Mathebula from Malamulele, Limpopo, was crowned the 25th Championship Boerewors winner following a charity rugby match held in Langa. The competition was tough, but James Lebepe from Atteridgeville and Moses Mathebula, from Lenyenye proved to be a cut above the rest, taking second and third place with their recipes.",
            "numberOfImages": 21
          },
          {
            "id": 12,
            "event_name": "2018",
            "created_at": "2019-08-07 07:24:30",
            "updated_at": "2019-08-07 09:06:57",
            "event_description": "South Africa’s 2018 Championship Boerewors competition awarded Yvonne Blaauw from Wellington the grand prize of a brand-new Toyota Hilux DC 2.8 GD-6 Raised Body Raider worth over R500 000. The other finalists crowned during the 26th instalment of the competition were Jean Drotsky from Pretoria and Bobby Hassen from Randgate, who shared their amazing recipes with the judges.",
            "numberOfImages": 23
          },
          {
            "id": 13,
            "event_name": "2019",
            "created_at": "2019-08-07 07:24:30",
            "updated_at": "2019-08-07 09:06:57",
            "event_description": "South Africa’s 2019 Championship Boerewors competition awarded second time winner Olivier Kritzinger the title of SA’s No.1 Boerewors Champion. Kritzinger walked away with prizes worth more than R500 000, including a brand-new Toyota Fortuner 2.4 GD-6 4X4 6AT.  Other finalists crowned during the 27th installment of the competition was last year’s winner, Yvonne Blaauw from Wellington in second place and Jimmy Steenberg, from Despatch in the Eastern Cape, in third place.",
            "numberOfImages": 21
          },
          {
            "id": 14,
            "event_name": "2020",
            "created_at": "2019-08-07 07:24:30",
            "updated_at": "2019-08-07 09:06:57",
            "event_description": "The winner of the Championship Boerewors competition is Delano Jasper (18), making him SA’s No.1 Boerewors Champion! Jasper, from Wellington in the Western Cape, is walking away with this year’s grand prize – a brand-new Toyota Fortuner 2.4 GD-6 RB 6AT. Our other finalists for this year include, Paul Jordaan from Bloemfontein, Free State, in second place and John Marais from Vredendal, Western Cape, taking third place.",
            "numberOfImages": 23
          }
        ],
        eventsHardCode: []
      }
    },
    components: {
      VueGallerySlideshow,
    },

    created() {
      this.maxItems = Modernizr && Modernizr.touchevents && Modernizr.mq('(max-width: 460px)') ? 2 : 6;
    },

    mounted() {
      this.firstCall.forEach((item, index) => {

        let galleryItem = {
          name: item.event_name,
          description: item['event_description'],
          id: item.id,
          created: item['created_at'],
          items: []
        };

        for (let i = 1; i < item.numberOfImages; i++) {
          galleryItem.items.push({
            filename: `${process.env.VUE_APP_AEM_PREFIX}/${item.event_name}/${item.event_name}-${i}.jpg`
          })
        }

        this.events.gallery.push(galleryItem);
      });
      // Sort
      this.events.gallery = this.events.gallery.sort((a, b) => {
        let aDate = new Date(a.created);
        let bDate = new Date(b.created);
        return aDate < bDate ? 1 : -1;
      });
    }
  }
</script>
<style lang="less">
  @smart-phone: ~'only screen and (max-width: 767px)';

  body, html {
    padding: 0;
    margin: 0;
  }

  a {
    color: black;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .img-fluid {
    width: 100%;
    max-width: 100%;
    height: auto;
  }

  #app {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .footer {
    background: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
  }

  #cbw-header {
    padding: 10px 20px;
    height: 160px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;

    @media @smart-phone {
      justify-content: center;
    }

    .logo {
      width: 60px;
      margin-right: 0.5rem;
    }

    .other-logos {
      display: flex;

      @media @smart-phone {
        display: none;
      }
    }

    .text {

    }

    .facebook-icon, .twitter-icon, .instagram-icon {
      margin-left: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

  }

  .headline {
    margin: 2rem 0 1rem;
    font-size: 40px;
    font-weight: 700;
    text-align: center;
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
    padding: 0 30px 30px;
    border-bottom: 1px solid lightgrey;

    @media @smart-phone {
        padding: 0 20px 20px;
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

  .vgs__gallery {
    min-height: 20vw;
  }
</style>
