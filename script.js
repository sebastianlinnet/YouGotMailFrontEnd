const baseUrl = "https://yougotmailapi.azurewebsites.net/api/Mail"

Vue.createApp({
    created() {
        this.getAllMail()
    },
    data() {
        return {
            mails: [],
            mail: null,
            deleteMessage: "",
            deleteId: 0,
        }
    },
    // computed: {
    //     getLastMail() {
    //         return this.mails.slice(-1)[0]
    //     }
    // },
    methods: {

        async helperGetAndShow(url) { // helper metode: getAllBooks + getByTitle are very similar
            try {
                const response = await axios.get(url)
                this.mails = await response.data
            } catch (ex) {
                alert(ex.message) // https://www.w3schools.com/js/js_popup.asp
            }
        },

        clearMail() {
            this.mails = []
        },

        deleteOneMail(index) {
            
        },

        getAllMail() {
            this.helperGetAndShow(baseUrl)
        },

        ConvertUnix(unix_timestamp) {
            let mailTimestamp = unix_timestamp
            // Create a new JavaScript Date object based on the timestamp
            // multiplied by 1000 so that the argument is in milliseconds, not seconds.
            var date = new Date(mailTimestamp * 1000);
            // Hours part from the timestamp
            var hours = date.getHours();
            // Minutes part from the timestamp
            var minutes = "0" + date.getMinutes();

            // Will display time in 10:30:23 format
            var formattedTime = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + ':  kl: ' + hours + ':' + minutes.substr(-2)
            console.log(formattedTime);
            return formattedTime;
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