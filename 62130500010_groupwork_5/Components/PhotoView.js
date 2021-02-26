app.component('photo-view', {
    props : {
        zoom : Object,
    },
    template:
        /*html*/
    `
    <div id="bigPicture" class="h-96 max-w-xl bg-black flex justify-center" >
      <img :src="zoom.bigPictureSrc">
      <div @click="zoomOut" class="w-10 h-10 absolute bg-red-400 mt-3.5 ml-28 -mr-96"></div>
    </div>
     `,
     methods: {
        zoomOut(){
            this.$emit("zoom-out")
        },
     },

})
