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
        index: null,
        eventIndex: 0,
        maxItems: 6,
        firstCall: [
          {
            "id": 10,
            "event_name": "2016",
            "created_at": "2019-08-07 07:02:07",
            "updated_at": "2019-08-07 09:06:37",
            "event_description": "South Africa’s 2016 Championship Boerewors winner was crowned on Robben Island on 15 September 2016. The boerewors recipe of Olivier Kritzinger from Joubertina was revealed as #SAsNo1, following an exciting charity rugby match! The other two Championship Boerewors finalists were Vukile Vincent Cele from Durban and Winter Reaobaka Letlhogile from Kimberley. All three finalists received gift hampers sponsored by Coca-Cola, All Gold and Simba. They also received in-store vouchers from Shoprite and Checkers."
          },
          {
            "id": 11,
            "event_name": "2017",
            "created_at": "2019-08-07 07:17:42",
            "updated_at": "2019-08-07 09:06:50",
            "event_description": "South Africa’s 2017 Championship Boerewors winners were announced in Cape Town on 22 July 2017. Queen Mathebula from Malamulele, Limpopo, was crowned the 25th Championship Boerewors winner following a charity rugby match held in Langa. The competition was tough, but James Lebepe from Atteridgeville and Moses Mathebula, from Lenyenye proved to be a cut above the rest, taking second and third place with their recipes."
          },
          {
            "id": 12,
            "event_name": "2018",
            "created_at": "2019-08-07 07:24:30",
            "updated_at": "2019-08-07 09:06:57",
            "event_description": "South Africa’s 2018 Championship Boerewors competition awarded Yvonne Blaauw from Wellington the grand prize of a brand-new Toyota Hilux DC 2.8 GD-6 Raised Body Raider worth over R500 000. The other finalists crowned during the 26th instalment of the competition were Jean Drotsky from Pretoria and Bobby Hassen from Randgate, who shared their amazing recipes with the judges."
          },
          {
            "id": 13,
            "event_name": "2019",
            "created_at": "2019-08-07 07:24:30",
            "updated_at": "2019-08-07 09:06:57",
            "event_description": "South Africa’s 2019 Championship Boerewors competition awarded second time winner Olivier Kritzinger the title of SA’s No.1 Boerewors Champion. Kritzinger walked away with prizes worth more than R500 000, including a brand-new Toyota Fortuner 2.4 GD-6 4X4 6AT.  Other finalists crowned during the 27th installment of the competition was last year’s winner, Yvonne Blaauw from Wellington in second place and Jimmy Steenberg, from Despatch in the Eastern Cape, in third place."
          }
        ],
        eventsHardCode: []
      }
    },
    components: {
      VueGallerySlideshow,
    },

    created() {
      this.eventsHardCode[0] = [
        {
          "id": 30,
          "filename": "php61heEg.jpg",
          "mime": "image/jpeg",
          "original_filename": "Carmen-Niehaus-CBW.jpg",
          "event_id": 10,
          "created_at": "2019-08-07 07:05:59",
          "updated_at": "2019-08-07 07:05:59"
        },
        {
          "id": 31,
          "filename": "php1kUITw.jpg",
          "mime": "image/jpeg",
          "original_filename": "CBW-2016-winner-Olivier-Kritzinger-and-wors-whisperer.jpg",
          "event_id": 10,
          "created_at": "2019-08-07 07:06:53",
          "updated_at": "2019-08-07 07:06:53"
        },
        {
          "id": 32,
          "filename": "phpoIeLYy.jpg",
          "mime": "image/jpeg",
          "original_filename": "CBW2016-final-15Sept-1.jpg",
          "event_id": 10,
          "created_at": "2019-08-07 07:07:18",
          "updated_at": "2019-08-07 07:07:18"
        },
        {
          "id": 33,
          "filename": "phpZsxEyz.jpg",
          "mime": "image/jpeg",
          "original_filename": "CBW2016-final-15Sept-2.jpg",
          "event_id": 10,
          "created_at": "2019-08-07 07:07:42",
          "updated_at": "2019-08-07 07:07:42"
        },
        {
          "id": 34,
          "filename": "phpk7ScoS.jpg",
          "mime": "image/jpeg",
          "original_filename": "CBW2016-final-15Sept-3.jpg",
          "event_id": 10,
          "created_at": "2019-08-07 07:08:33",
          "updated_at": "2019-08-07 07:08:33"
        },
        {
          "id": 35,
          "filename": "phpavqOOn.jpg",
          "mime": "image/jpeg",
          "original_filename": "CBW2016-final-15Sept-4.jpg",
          "event_id": 10,
          "created_at": "2019-08-07 07:08:48",
          "updated_at": "2019-08-07 07:08:48"
        },
        {
          "id": 36,
          "filename": "phpl6vdWa.jpg",
          "mime": "image/jpeg",
          "original_filename": "CBW2016-final-15Sept-5.jpg",
          "event_id": 10,
          "created_at": "2019-08-07 07:09:07",
          "updated_at": "2019-08-07 07:09:07"
        },
        {
          "id": 37,
          "filename": "phpyTWHgZ.jpg",
          "mime": "image/jpeg",
          "original_filename": "CBW2016-final-15Sept-6.jpg",
          "event_id": 10,
          "created_at": "2019-08-07 07:09:22",
          "updated_at": "2019-08-07 07:09:22"
        },
        {
          "id": 38,
          "filename": "php6YaCHn.jpg",
          "mime": "image/jpeg",
          "original_filename": "CBW2016-final-15Sept-7.jpg",
          "event_id": 10,
          "created_at": "2019-08-07 07:09:39",
          "updated_at": "2019-08-07 07:09:39"
        },
        {
          "id": 39,
          "filename": "phpNtiW5d.jpg",
          "mime": "image/jpeg",
          "original_filename": "CBW2016-final-15Sept-8.jpg",
          "event_id": 10,
          "created_at": "2019-08-07 07:09:55",
          "updated_at": "2019-08-07 07:09:55"
        },
        {
          "id": 40,
          "filename": "phpZqerAq.jpg",
          "mime": "image/jpeg",
          "original_filename": "CBW2016-final-15Sept-9.jpg",
          "event_id": 10,
          "created_at": "2019-08-07 07:10:11",
          "updated_at": "2019-08-07 07:10:11"
        },
        {
          "id": 41,
          "filename": "php8HulXB.jpg",
          "mime": "image/jpeg",
          "original_filename": "CBW2016-final-15Sept-10.jpg",
          "event_id": 10,
          "created_at": "2019-08-07 07:10:28",
          "updated_at": "2019-08-07 07:10:28"
        },
        {
          "id": 42,
          "filename": "phpbTbMJs.jpg",
          "mime": "image/jpeg",
          "original_filename": "CBW2016-final-15Sept-11.jpg",
          "event_id": 10,
          "created_at": "2019-08-07 07:10:46",
          "updated_at": "2019-08-07 07:10:46"
        },
        {
          "id": 43,
          "filename": "phpDN45V5.jpg",
          "mime": "image/jpeg",
          "original_filename": "CBW2016-final-15Sept-12.jpg",
          "event_id": 10,
          "created_at": "2019-08-07 07:11:04",
          "updated_at": "2019-08-07 07:11:04"
        },
        {
          "id": 45,
          "filename": "phpFrYAfG.jpg",
          "mime": "image/jpeg",
          "original_filename": "CBW2016-final-15Sept-13.jpg",
          "event_id": 10,
          "created_at": "2019-08-07 07:11:23",
          "updated_at": "2019-08-07 07:11:23"
        },
        {
          "id": 46,
          "filename": "phpUPneOE.jpg",
          "mime": "image/jpeg",
          "original_filename": "CBW2016-final-Blitzbokke-rugby-15Sept.jpg",
          "event_id": 10,
          "created_at": "2019-08-07 07:11:41",
          "updated_at": "2019-08-07 07:11:41"
        },
        {
          "id": 47,
          "filename": "phpWEj678.jpg",
          "mime": "image/jpeg",
          "original_filename": "CBW2016-final-Olivier-Kritzinger-Blitzbokke-15Sept.jpg",
          "event_id": 10,
          "created_at": "2019-08-07 07:11:56",
          "updated_at": "2019-08-07 07:11:56"
        },
        {
          "id": 48,
          "filename": "phpwhlae6.jpg",
          "mime": "image/jpeg",
          "original_filename": "Jenny-Morris-CBW.jpg",
          "event_id": 10,
          "created_at": "2019-08-07 07:12:14",
          "updated_at": "2019-08-07 07:12:14"
        },
        {
          "id": 49,
          "filename": "phpVMdC7S.jpg",
          "mime": "image/jpeg",
          "original_filename": "Judges-group-shot.jpg",
          "event_id": 10,
          "created_at": "2019-08-07 07:12:28",
          "updated_at": "2019-08-07 07:12:28"
        },
        {
          "id": 50,
          "filename": "phpsIqdMV.jpg",
          "mime": "image/jpeg",
          "original_filename": "Martin-Kobald-CBW.jpg",
          "event_id": 10,
          "created_at": "2019-08-07 07:12:47",
          "updated_at": "2019-08-07 07:12:47"
        },
        {
          "id": 51,
          "filename": "php3hCAB0.jpg",
          "mime": "image/jpeg",
          "original_filename": "Pete-Goffe-Wood-CBW.jpg",
          "event_id": 10,
          "created_at": "2019-08-07 07:13:04",
          "updated_at": "2019-08-07 07:13:04"
        },
        {
          "id": 52,
          "filename": "phpMDTm1d.jpg",
          "mime": "image/jpeg",
          "original_filename": "Reuben-Riffel-CBW.jpg",
          "event_id": 10,
          "created_at": "2019-08-07 07:14:02",
          "updated_at": "2019-08-07 07:14:02"
        },
        {
          "id": 53,
          "filename": "phpEkX8JA.jpg",
          "mime": "image/jpeg",
          "original_filename": "Thuli-Gogela-CBW.jpg",
          "event_id": 10,
          "created_at": "2019-08-07 07:14:19",
          "updated_at": "2019-08-07 07:14:19"
        }
      ];
      this.eventsHardCode[1] = [
        {
          "id": 54,
          "filename": "phpXQKxZo.jpg",
          "mime": "image/jpeg",
          "original_filename": "LB1_2493.jpg",
          "event_id": 11,
          "created_at": "2019-08-07 07:18:59",
          "updated_at": "2019-08-07 07:18:59"
        },
        {
          "id": 55,
          "filename": "phpaB58xR.jpg",
          "mime": "image/jpeg",
          "original_filename": "LB1_2669.jpg",
          "event_id": 11,
          "created_at": "2019-08-07 07:19:22",
          "updated_at": "2019-08-07 07:19:22"
        },
        {
          "id": 56,
          "filename": "phplnEkYd.jpg",
          "mime": "image/jpeg",
          "original_filename": "LB1_2736.jpg",
          "event_id": 11,
          "created_at": "2019-08-07 07:19:32",
          "updated_at": "2019-08-07 07:19:32"
        },
        {
          "id": 57,
          "filename": "phpEgKeFa.jpg",
          "mime": "image/jpeg",
          "original_filename": "LB1_2742.jpg",
          "event_id": 11,
          "created_at": "2019-08-07 07:19:53",
          "updated_at": "2019-08-07 07:19:53"
        },
        {
          "id": 58,
          "filename": "phpVuvwLA.jpg",
          "mime": "image/jpeg",
          "original_filename": "LB1_2749.jpg",
          "event_id": 11,
          "created_at": "2019-08-07 07:20:08",
          "updated_at": "2019-08-07 07:20:08"
        },
        {
          "id": 59,
          "filename": "phprM4ibj.jpg",
          "mime": "image/jpeg",
          "original_filename": "LB1_2759.jpg",
          "event_id": 11,
          "created_at": "2019-08-07 07:20:17",
          "updated_at": "2019-08-07 07:20:17"
        },
        {
          "id": 60,
          "filename": "phpXVmGoU.jpg",
          "mime": "image/jpeg",
          "original_filename": "LB1_2770.jpg",
          "event_id": 11,
          "created_at": "2019-08-07 07:20:26",
          "updated_at": "2019-08-07 07:20:26"
        },
        {
          "id": 62,
          "filename": "phpPwaJSZ.jpg",
          "mime": "image/jpeg",
          "original_filename": "LB1_2818.jpg",
          "event_id": 11,
          "created_at": "2019-08-07 07:20:46",
          "updated_at": "2019-08-07 07:20:46"
        },
        {
          "id": 63,
          "filename": "phpr5hcLA.jpg",
          "mime": "image/jpeg",
          "original_filename": "LB1_2841.jpg",
          "event_id": 11,
          "created_at": "2019-08-07 07:21:30",
          "updated_at": "2019-08-07 07:21:30"
        },
        {
          "id": 64,
          "filename": "phpBkY0h8.jpg",
          "mime": "image/jpeg",
          "original_filename": "LB1_2855.jpg",
          "event_id": 11,
          "created_at": "2019-08-07 07:21:42",
          "updated_at": "2019-08-07 07:21:42"
        },
        {
          "id": 65,
          "filename": "phpURBSv2.jpg",
          "mime": "image/jpeg",
          "original_filename": "LB1_2935.jpg",
          "event_id": 11,
          "created_at": "2019-08-07 07:21:50",
          "updated_at": "2019-08-07 07:21:50"
        },
        {
          "id": 66,
          "filename": "phpduIHmP.jpg",
          "mime": "image/jpeg",
          "original_filename": "LB1_2938.jpg",
          "event_id": 11,
          "created_at": "2019-08-07 07:21:59",
          "updated_at": "2019-08-07 07:21:59"
        },
        {
          "id": 67,
          "filename": "phpzn0Pyb.jpg",
          "mime": "image/jpeg",
          "original_filename": "LB1_3011.jpg",
          "event_id": 11,
          "created_at": "2019-08-07 07:22:08",
          "updated_at": "2019-08-07 07:22:08"
        },
        {
          "id": 68,
          "filename": "phpoFh0PA.jpg",
          "mime": "image/jpeg",
          "original_filename": "LBA_0337.jpg",
          "event_id": 11,
          "created_at": "2019-08-07 07:22:17",
          "updated_at": "2019-08-07 07:22:17"
        },
        {
          "id": 69,
          "filename": "php7TXi4J.jpg",
          "mime": "image/jpeg",
          "original_filename": "LBA_0345.jpg",
          "event_id": 11,
          "created_at": "2019-08-07 07:22:27",
          "updated_at": "2019-08-07 07:22:27"
        },
        {
          "id": 70,
          "filename": "phpxYeOOp.jpg",
          "mime": "image/jpeg",
          "original_filename": "LBA_0357.jpg",
          "event_id": 11,
          "created_at": "2019-08-07 07:22:44",
          "updated_at": "2019-08-07 07:22:44"
        },
        {
          "id": 71,
          "filename": "phpBTc9D7.jpg",
          "mime": "image/jpeg",
          "original_filename": "LBA_0370.jpg",
          "event_id": 11,
          "created_at": "2019-08-07 07:22:56",
          "updated_at": "2019-08-07 07:22:56"
        },
        {
          "id": 72,
          "filename": "phpUqOCJv.jpg",
          "mime": "image/jpeg",
          "original_filename": "LBA_0454.jpg",
          "event_id": 11,
          "created_at": "2019-08-07 07:23:15",
          "updated_at": "2019-08-07 07:23:15"
        },
        {
          "id": 73,
          "filename": "phphi0F8R.jpg",
          "mime": "image/jpeg",
          "original_filename": "LBA_0549.jpg",
          "event_id": 11,
          "created_at": "2019-08-07 07:23:31",
          "updated_at": "2019-08-07 07:23:31"
        },
        {
          "id": 74,
          "filename": "phpdUIeMV.jpg",
          "mime": "image/jpeg",
          "original_filename": "LBA_0563.jpg",
          "event_id": 11,
          "created_at": "2019-08-07 07:23:43",
          "updated_at": "2019-08-07 07:23:43"
        },
        {
          "id": 75,
          "filename": "phpZUs6Le.jpg",
          "mime": "image/jpeg",
          "original_filename": "Top-3-CBW-2017-1.jpg",
          "event_id": 11,
          "created_at": "2019-08-07 07:23:53",
          "updated_at": "2019-08-07 07:23:53"
        }
      ];
      this.eventsHardCode[2] = [
        {
          "id": 76,
          "filename": "phpRswYEs.jpg",
          "mime": "image/jpeg",
          "original_filename": "1.jpg",
          "event_id": 12,
          "created_at": "2019-08-07 07:24:50",
          "updated_at": "2019-08-07 07:24:50"
        },
        {
          "id": 77,
          "filename": "phpSlM2Qa.jpg",
          "mime": "image/jpeg",
          "original_filename": "2.jpg",
          "event_id": 12,
          "created_at": "2019-08-07 07:24:58",
          "updated_at": "2019-08-07 07:24:58"
        },
        {
          "id": 78,
          "filename": "phpLPoFBy.jpg",
          "mime": "image/jpeg",
          "original_filename": "3.jpg",
          "event_id": 12,
          "created_at": "2019-08-07 07:25:06",
          "updated_at": "2019-08-07 07:25:06"
        },
        {
          "id": 79,
          "filename": "phpzoWtff.jpg",
          "mime": "image/jpeg",
          "original_filename": "4.jpg",
          "event_id": 12,
          "created_at": "2019-08-07 07:25:14",
          "updated_at": "2019-08-07 07:25:14"
        },
        {
          "id": 80,
          "filename": "phpUz0hcM.jpg",
          "mime": "image/jpeg",
          "original_filename": "5.jpg",
          "event_id": 12,
          "created_at": "2019-08-07 07:25:23",
          "updated_at": "2019-08-07 07:25:23"
        },
        {
          "id": 81,
          "filename": "phpf2QCLM.jpg",
          "mime": "image/jpeg",
          "original_filename": "6.jpg",
          "event_id": 12,
          "created_at": "2019-08-07 07:25:31",
          "updated_at": "2019-08-07 07:25:31"
        },
        {
          "id": 82,
          "filename": "phpHGRk8g.jpg",
          "mime": "image/jpeg",
          "original_filename": "7.jpg",
          "event_id": 12,
          "created_at": "2019-08-07 07:25:40",
          "updated_at": "2019-08-07 07:25:40"
        },
        {
          "id": 83,
          "filename": "php7cMw60.jpg",
          "mime": "image/jpeg",
          "original_filename": "8.jpg",
          "event_id": 12,
          "created_at": "2019-08-07 07:25:48",
          "updated_at": "2019-08-07 07:25:48"
        },
        {
          "id": 84,
          "filename": "php0IMtvY.jpg",
          "mime": "image/jpeg",
          "original_filename": "9.jpg",
          "event_id": 12,
          "created_at": "2019-08-07 07:25:59",
          "updated_at": "2019-08-07 07:25:59"
        },
        {
          "id": 85,
          "filename": "phpTT9VAW.jpg",
          "mime": "image/jpeg",
          "original_filename": "10.jpg",
          "event_id": 12,
          "created_at": "2019-08-07 07:26:11",
          "updated_at": "2019-08-07 07:26:11"
        },
        {
          "id": 86,
          "filename": "phpYT4JtQ.jpg",
          "mime": "image/jpeg",
          "original_filename": "11.jpg",
          "event_id": 12,
          "created_at": "2019-08-07 07:26:19",
          "updated_at": "2019-08-07 07:26:19"
        },
        {
          "id": 87,
          "filename": "phpWwQmIR.jpg",
          "mime": "image/jpeg",
          "original_filename": "12.jpg",
          "event_id": 12,
          "created_at": "2019-08-07 07:26:26",
          "updated_at": "2019-08-07 07:26:26"
        },
        {
          "id": 88,
          "filename": "phpnCvpUD.jpg",
          "mime": "image/jpeg",
          "original_filename": "13.jpg",
          "event_id": 12,
          "created_at": "2019-08-07 07:26:35",
          "updated_at": "2019-08-07 07:26:35"
        },
        {
          "id": 89,
          "filename": "phppfTniK.jpg",
          "mime": "image/jpeg",
          "original_filename": "14.jpg",
          "event_id": 12,
          "created_at": "2019-08-07 07:26:45",
          "updated_at": "2019-08-07 07:26:45"
        },
        {
          "id": 90,
          "filename": "phpHvnxmF.jpg",
          "mime": "image/jpeg",
          "original_filename": "15.jpg",
          "event_id": 12,
          "created_at": "2019-08-07 07:26:54",
          "updated_at": "2019-08-07 07:26:54"
        },
        {
          "id": 91,
          "filename": "php7ie3I5.jpg",
          "mime": "image/jpeg",
          "original_filename": "16.jpg",
          "event_id": 12,
          "created_at": "2019-08-07 07:27:04",
          "updated_at": "2019-08-07 07:27:04"
        },
        {
          "id": 92,
          "filename": "php4A43PV.jpg",
          "mime": "image/jpeg",
          "original_filename": "17.jpg",
          "event_id": 12,
          "created_at": "2019-08-07 07:27:13",
          "updated_at": "2019-08-07 07:27:13"
        },
        {
          "id": 93,
          "filename": "phpXwTlk1.jpg",
          "mime": "image/jpeg",
          "original_filename": "18.jpg",
          "event_id": 12,
          "created_at": "2019-08-07 07:27:21",
          "updated_at": "2019-08-07 07:27:21"
        },
        {
          "id": 94,
          "filename": "phpT91wTj.jpg",
          "mime": "image/jpeg",
          "original_filename": "19.jpg",
          "event_id": 12,
          "created_at": "2019-08-07 07:27:29",
          "updated_at": "2019-08-07 07:27:29"
        },
        {
          "id": 95,
          "filename": "phpUzrRxD.jpg",
          "mime": "image/jpeg",
          "original_filename": "20.jpg",
          "event_id": 12,
          "created_at": "2019-08-07 07:27:37",
          "updated_at": "2019-08-07 07:27:37"
        },
        {
          "id": 96,
          "filename": "phpdMzbfW.jpg",
          "mime": "image/jpeg",
          "original_filename": "21.jpg",
          "event_id": 12,
          "created_at": "2019-08-07 07:27:47",
          "updated_at": "2019-08-07 07:27:47"
        },
        {
          "id": 97,
          "filename": "phprsAgxi.jpg",
          "mime": "image/jpeg",
          "original_filename": "22.jpg",
          "event_id": 12,
          "created_at": "2019-08-07 07:27:55",
          "updated_at": "2019-08-07 07:27:55"
        },
        {
          "id": 98,
          "filename": "phpUWlrIy.jpg",
          "mime": "image/jpeg",
          "original_filename": "2018-CBW-winners.jpg",
          "event_id": 12,
          "created_at": "2019-08-07 07:28:06",
          "updated_at": "2019-08-07 07:28:06"
        }
      ];
      this.eventsHardCode[3] = [
        {
          "id": 76,

        },
        {
          "id": 77,

        },
        {
          "id": 78,

        },
        {
          "id": 79,

        },
        {
          "id": 80,

        },
        {
          "id": 81,

        },
        {
          "id": 82,

        },
        {
          "id": 83,

        },
        {
          "id": 84,
        },
        {
          "id": 85,

        },
        {
          "id": 86,
        },
        {
          "id": 87,
        },
        {
          "id": 88,
        },
        {
          "id": 89,
        },
        {
          "id": 90,
        },
        {
          "id": 91,
        },
        {
          "id": 91,
        },
        {
          "id": 91,
        },
        {
          "id": 91,
        },
        {
          "id": 91,
        },
        {
          "id": 91,
        }
      ];
      this.maxItems = Modernizr && Modernizr.touchevents && Modernizr.mq('(max-width: 460px)') ? 2 : 6;
    },
    mounted() {
      this.firstCall.forEach((item, index) => {
       this.eventsHardCode[index].forEach((_item, index2) => {
          _item.filename = index === 3 ? `http://checkershosting.s3.amazonaws.com/cbw-2019/77684_CBW_EventImages_${index2+1}_600x600.jpg`: `http://ec2-54-161-60-4.compute-1.amazonaws.com/uploads/${_item.filename}`;
        });
        let galleryItem = {
          name: item.event_name,
          description: item['event_description'],
          id: item.id,
          created: item['created_at'],
          items: this.eventsHardCode[index]
        };
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
