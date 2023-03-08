

// Axios
import axios from 'axios'

const apiKey = 'twbPe4xwJHdR8ZA1mcSWSx56TilyfdAD'
//`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        apiKey: apiKey
    }
})

// giphyApi.get('/random').then(
//     resp => {
//         // Extraer de manera optima data de la respuesta (imagen en este caso)
//         const {data} = resp.data
//         const {url} = data.images.original

//         const img = document.createElement('img')
//         img.src = url
//         document.body.append(img)
//     }
// )


// Async & Await

/* Una funcion asincrona, retorna una promesa por defecto
El await solo puede ser usado dentro de una funcion asincrona */

const myPromise = () => {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve('Tenemos un valor en la promesa')
        }, 1000);
    })
}

console.log('Inicio')

myPromise() //Funcion normal


console.log('Final')


// Funcion async

const timeAsync = async() => {
    console.log("inicio async")
    await myPromise()
    console.log(' fin async')
}

timeAsync()


