const app = Vue.createApp({
    // template: `
    // <h1> Hola Mundo </h1>
    // <p> Desde VueJs </p>
    // `

    // Metodos que luego se usaran. Conocidos como options api
    // methods: {},
    // watch: {},
    // Enfocado al composition api
    // setup() {}

    data() {
        return {
            quote: "I'm Batman",
            author: "Bruce Wayne"
        }
    },
    methods: {
        changeQuote(){
            this.author = 'Klen Rodriguez'
            console.log('Klen')

            this.capitalize()
        },
        capitalize(){
            this.quote = this.quote.toUpperCase()
        }
    },
})

app.mount('#myApp')


//  Representacion Declarativa

