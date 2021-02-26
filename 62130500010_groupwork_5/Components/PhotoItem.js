app.component('photo-items',{
    props : {
        photos : Object,
    },
    template:
    /*html*/
      `
       <img v-bind:src="photos.image" alt="photos.title" class="w-24 py-3" @click="bigPic(photos)">
      <span class="text-pink-400 font-semibold font-serif text-xl">{{photos.title}} </span>
      <span v-show="!photos.liked" class="material-icons text-red-400 cursor-pointer" v-on:click="toggleLiked(photos)">favorite_border</span>
      <span v-show="photos.liked" class="material-icons text-red-400 cursor-pointer" v-on:click="toggleLiked(photos)">favorite</span>
      `,
      methods: {
          bigPic(photos) {
            console.log(photos)
            this.$emit("big-pic",photos)  
          },
          toggleLiked(photos){
            this.$emit("like-pic",photos)
          },
      },
})