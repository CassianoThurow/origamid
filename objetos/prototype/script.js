function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
}

const cassio = new Pessoa("Cassio", 25)

console.log(Pessoa.prototype) //funcao
console.log(cassio.prototype) //objeto


Pessoa.prototype.andar = function(){
    return this.nome + ` andou`;
}


const pais = "brasil"

const cidade = new String('pelotas')


const listaAnimais = ['Cachorro', "Gato", "Galo", "Peru"]



const lista = document.querySelectorAll('li')

const nodeToArray = Array.from(lista)

console.log(nodeToArray)



function Carro(marca, preco){
    this.marca = marca;
    this.preco = preco
    this.andar = function(){
        return true;
    }
}

const fiat = new Carro ('Fiat', 2000)
