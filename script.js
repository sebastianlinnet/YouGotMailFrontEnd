const baseUrl = "https://jsonplaceholder.typicode.com/posts"

Vue.createApp({
    created(){
        this.getAllMail()
    },
    data() {
        return {
            mails: [],
            mail: null,
            deleteMessage: "",

        }
    },
    methods: {
        
        async helperGetAndShow(url) { // helper metode: getAllBooks + getByTitle are very similar
            try {
                const response = await axios.get(url)
                this.mails = await response.data
            } catch (ex) {
                alert(ex.message) // https://www.w3schools.com/js/js_popup.asp
            }
        },

        getAllMail() {
            this.helperGetAndShow(baseUrl)
        },

        async getById(id) {
            const url = baseUrl + "/" + id
            try {
                const response = await axios.get(url)
                this.mail = await response.data
            } catch (ex) {
                alert(ex.message)
            }
        },

        async deleteMail(deleteId) {
            const url = baseUrl + "/" + deleteId
            try {
                response = await axios.delete(url)
                this.deleteMessage = response.status + " " + response.statusText
                this.getAllMail()
            } catch (ex) {
                alert(ex.message)
            }
        },
    
        
    }
}).mount("#app")