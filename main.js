const { createApp } = Vue

createApp({
    data() {
        return {
            list: [],
            newItem: "",
        }
    },
    methods: {
        addItem() {
            const data = {
                newItem: this.newItem
            };
            //postare il nuovo item nel server e poi incorporare in lista
            axios.post('server.php', data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            })
                .then((response) => {
                    this.newItem = "";
                    this.list = response.data;
                    console.log(this.list)
                })
        }
    },
    created() {
        //chiamata al server e stampa la risposta in lista
        axios.get('server.php')
            .then((response) => {
                this.list = response.data;
                console.log(response)
            })
    }
}).mount('#app')