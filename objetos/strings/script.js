const comida = "pizza"
const agua = new String('Agua')


console.log(comida.length)
console.log(agua.length)

comida[0] //p
agua[0] //a
comida[comida.length -1 ] //a


const frase= "A melhor linguagem é "
const linguagem = 'JavaScript'

linguagem.charAt(0)

const fraseFinal = frase.concat(linguagem)



const fruta = "banana"
const listaFrutas = "melancia, banana, laranja"

listaFrutas.includes(fruta, 2) //true
fruta.includes(listaFrutas) //false



fruta.endsWith('nana')//true
fruta.startsWith('ba') //true
fruta.startsWith('Ba') //false


const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(0, 3)); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi



linguagem.substring(3,5)


console.log(fruta.indexOf("a"))
console.log(fruta.lastIndexOf("a"))


const listaPreco = ['R$ 99', "R$ 199", "R$ 12000"]

listaPreco.forEach((preco) => {
    console.log(preco.padStart(10))
})

const frase2 = "ta"

frase2.repeat(5)

let listaItens = 'Camisas Bones Calças Bermudas Vestidos Saias'
listaItens = listaItens.replace(/[ ]+/g, ' - ');


const arrayLista = listaItens.split('-')




const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';

console.log(htmlText)

const htmlArray = htmlText.split('div')

console.log(htmlArray)

const novoHtml = htmlArray.join('section')


console.log(novoHtml)



const frutasArray = ['banana', 'melancia', 'laranja']
console.log(frutasArray)
frutasArray.join('a')
console.log(frutasArray)



const sexo1 = "Feminino";
const sexo2 = 'feminino';
const sexo3 = "FEMININO";

console.log(sexo1.toLocaleLowerCase() === 'feminino')

const valor = '     R$ 23,00      '
valor.trim()