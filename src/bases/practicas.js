// console.log('Hola Klen!!')

// const name = 'Klen'
// const lastname = 'Rodriguez'

// const fullName = `${name} ${lastname}`

// console.log(fullName)

// function getHi(name){
//     return 'Hi ' + name
// }

// console.log(`This is a text: ${ getHi(name)}`)


// Object Literal

const person = {
    name: 'Tony',
    lastname: 'Stark',
    age: 45,
    address: {
        city: 'New York',
        zip: 634527,
        lat: 14.3232,
        lng: 34.8379
    }
}

/* Operador sprep '...' (al inicio de la palabra): 
Permite esparcir las propiedades de un objeto para crear otro */
const person2 = {...person} 
person2.name = 'Peter'

// console.log(person)
// console.log(person2)

////// Arrays

const array = [1,2,3,4];

// Insertar valor con push()
array.push(5)

// Operador Spread: Permite a un elemento iterable ser expandido
const array2 = [...array, 6]

// console.log(array);
// console.log(array2);

/* Operador map(): 
Crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos */
const array3 = array2.map( function(n){
    return n * 2;
} )

// console.log(array3);

// Functions 
// function hi(x){
//     return `Hi ${x}`
// }
const greeting = function hi(x){
        return `Hi ${x}, this is a normal function`;
    }

const name = 'Tony'
// console.log(greeting(name));

// Row Function

const rowfunction = (x) => {
    return `Hola ${x}, esta es una row function`
}
// console.log(rowfunction(name));

/* Nota: cuando se pasa un solo argumento en 
una row function, los parentesis son opcionales */

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'Tony001'
    }
}

// console.log(getUser())

const heroes = [
    {
        id: 1,
        name: 'Batman'
    },
    {
        id: 2,
        name: 'Superman'
    }
]

// Some Method : Evalua el objeto y verifica si se cumple la condicion

const someMethod = heroes.some((heroe) => heroe.id === 1);

// console.log(someMethod);

//Find Method : Busca un elemento en el arreglo que cumpla con la condicion y lo retorna
// Si no encuentra ningun elemento que cumpla, retorna undefined
const findMethod = heroes.find((heroe) => heroe.id === 2)

// console.log(findMethod)


// Desestructuracion de Objetos

const persona = {
    nombre: 'Tony',
    age: 45,
    codeName: 'Ironman'
}

//const {age, nombre, codeName} = persona // => se desestructura entre llaves

//console.log(age, nombre, codeName);

const desestructuracion = (persona) => {
    const {nombre, age, codeName} = persona
    return {
        id: 12345,
        nombre: nombre,
        age: age,
        codeName: codeName
    }
}
// console.log(desestructuracion(persona))


// Desestructuracion de Arreglos

const characters = ['Ironman','Spiderman','AmericaCaptain','Thor']

const [i, s, ac, t] = characters

// console.log(i, s, ac, t);

// Para tomar un elemento especifico se deja las comas como marca de espacio

const [,,capitan,] = characters

// console.log(capitan)

// Importaciones y Exportaciones

import {owners} from './data/heroes'

// console.log(owners)

// Al importar, puedo usar todo lo que este dentro del elemento
const [dc, marvel] = owners;

// console.log(dc, marvel);

// Importacion en base a exportacion por defecto
// Al ser este tipo, se le puede poner el nombre que quiera

import superHeroes from './data/heroes'

// console.log(superHeroes)

const getHeroById = (id) => {
    return superHeroes.find(hero => hero.id === id)
}

const getHeroByOwner = (owner) => {
    return superHeroes.filter(hero => hero.owner === owner)
}

// console.log(getHeroById(2))
// console.log(getHeroByOwner('Marvel'))


// Promesas

console.log('Inicio')

new Promise((resolve, reject)=> {

    console.log('Cuerpo de la promesa')
    resolve('Promesa Resuelta')

}).then(console.log)

console.log('Fin')


// Argumentos a Promesas

const getHeroByIdAsync = (id)=> {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            
            const hero = getHeroById(id)

            if(hero){
                resolve(hero)
            }else {
                reject("Heroe no existe!")
            }
        }, 1000);
    });
}

getHeroByIdAsync(2)
    .then(h => console.log(`El hereoe es: ${h.name}`))
    .catch(console.log)




