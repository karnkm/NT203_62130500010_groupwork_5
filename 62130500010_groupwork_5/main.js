const app = Vue.createApp({
    data() {
        return {
            photos: [
                { picNo: "1", image: '/images/leng.png', title: 'Leng', liked: false },
                { picNo: "2", image: '/images/guy.png', title: 'Guy', liked: false },
                { picNo: "3", image: '/images/pizza.jpg', title: 'Pizza', liked: false },
                { picNo: "4", image: '/images/cake.jpg', title: 'Cake', liked: false }
            ],
            message: '',
            form: { searchText: '' },
            zoom: { bigPictureSrc: '' },
            isBigPicture: false,
        }
    },
    methods: {
        toggleLiked(photos) {
            for (let index = 0; index < this.photos.length; index++) {
                if (photos.picNo == this.photos[index].picNo) {
                    this.photos[index].liked = !this.photos[index].liked;
                }
            }
        },
        search() {
            this.message = this.form.searchText;
        },
        bigPic(photos) {
            for (let index = 0; index < this.photos.length; index++) {
                if (photos.picNo == this.photos[index].picNo) {
                    this.zoom.bigPictureSrc = this.photos[index].image;
                }
            }
            this.isBigPicture = true;
        },
        zoomOut() {
            this.isBigPicture = false;
        }
    },

    computed: {
        countUnliked() {
            return this.photos.filter(t => !t.liked).length
        },
        searching() {
            return this.photos.filter((member) => {
                return member.title.toLowerCase().includes(this.message.toLowerCase());
            });
        }
    }


})
