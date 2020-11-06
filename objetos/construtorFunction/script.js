// const carro = {
//     marca: 'marca',
//     preco: 0
// }

// const honda = carro;
// honda.marca = 'honda'
// honda.preco = 1000

// const fiat = carro;
// fiat.marca = 'fiat'
// fiat.preco = 2000


function Carro(){
    this.marca = ''
    this.preco = 0
}

const honda = new Carro()
honda.marca = 'honda'
honda.preco = 1000

const fiat = new Carro()
fiat.marca = 'fiat'
fiat.preco = 2000



function carro2(marca, precoInicial){
    const taxa = 1.2;
    const precoFinal = precoInicial * taxa
    this.marca = marca;
    this.preco = precoFinal
    console.log(this)
}

const mazda = new carro2('mazda', 5000)
