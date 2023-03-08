const apiKey = 'twbPe4xwJHdR8ZA1mcSWSx56TilyfdAD'
// https://api.giphy.com/v1/gifs/random?api_key=twbPe4xwJHdR8ZA1mcSWSx56TilyfdAD

/* Fetch API: Funcion propia de js, permite
hacer llamadas http de manera sencilla. 
No hay necesidad de importar nada */

// Manera menos optima
// fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
//     .then(resp => {
//         //console.log(resp.json())
//         resp.json().then(resp => console.log(resp))
//     })


// Manera optima
// Se esta usando desestructuracion de datos para obtener solo
// la data y obviar la metaData
fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then(resp => resp.json())
    .then(({data}) => {
        //console.log(data)
        const {url} = data.images.original
        console.log(url)

        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    })







