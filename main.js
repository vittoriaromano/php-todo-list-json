const {createApp} = Vue

createApp({
    data(){
        return{
           list: [], 
        }
    },
    created(){
        axios.get('server.php')
          .then((response) => {
            this.list = response.data;
            console.log(this.list)
          })
    }
}).mount('#app')