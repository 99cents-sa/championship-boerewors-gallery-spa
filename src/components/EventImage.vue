  <template>
        <div class="image" v-bind:style="{ backgroundImage: 'url(' + image + ')' }">
      </div>
    </template>
 <script>
    export default {
      name: 'EventImage',
      props : [
        'image',
        'title',
        'description',
        'duration'
      ],
    }
    </script>

      <style scoped>
    h1, h2 {
      font-weight: normal;
    }
    .image{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
      text-align: left;
      padding: 0.833em;
      width : 25em;
      height : 25em;
      background-color: rgba(255,255,255,0.7);
      background-repeat: no-repeat;
      background-blend-mode: overlay;
      background-size: cover;
      border-radius: 1.25em;
      border: 1px solid #ebebeb;
    }
    </style>