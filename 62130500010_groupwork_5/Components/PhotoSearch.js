app.component('photo-search', {
    props : {
        form : Object,
    },
    template:
        /*html*/
        `
    <span class="material-icons text-5xl cursor-pointer" v-show="!searchbutton" @click="searchBarToggle">search </span>
<div v-show="searchbutton"><input type="text" placeholder="Searching photos:" v-model="form.searchText"
    @keyup.enter="search" class="border border-black">
  <p>{{message}}</p>
  <button @click="searchBarToggle" class="bg-green-500 text-white py-1 px-2 rounded">Cancel</button>
</div>
    `,
    methods: {
        searchBarToggle() {
            this.searchbutton = !this.searchbutton
        },
        search(){
            this.$emit("search")
        }
    },
    data() {
        return {
            searchbutton: false,
            searchText:'',
        }
    },


})