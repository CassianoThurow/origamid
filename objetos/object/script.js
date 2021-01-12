const carros = {
    marca: 'Ford',
    ano: 2018
}


const person = new Object({
    nome: 'Cassiano',
    idade: 25
})

const carro = {
    marca: "",
    rodas:4,
    acelerar(){
        return this.marca + ' acelerou';
    },
    businar(){
        return this.marca + ' businou';
    }
}

const honda = Object.create(carro)
honda.marca = 'Honda'

console.log(honda.acelerar())



const funcaoAutomovel = {
    acelerar(){
        return 'acelerou'
    },
    parar(){
        return 'parou'
    }
}

const moto = {
    rodas: 2,
    capacete: true
}




Object.assign(moto, funcaoAutomovel)

const bicicleta = {}

// Object.defineProperties(bicicleta, {
//     rodas:{
//         value: 2,
//         configurable: false,
//         enumerable: false,
//     }

// })

// bicicleta.rodas = 8
// console.log(bicicleta)

Object.defineProperties(bicicleta, {
    rodas: {
        get(){
          return  this._rodas
        },
        set(value){
           this.rodas = value * 4 
        }
    }
})

console.log(bicicleta.rodas)



