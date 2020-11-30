Array

console.log(Array)

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

dados[2]('Ford');
dados[1][2].cor; // azul


const carros = new Array('Ford', 'Fiat', 'Honda')

carros[2]= 'Ferrari'



carros.lenth //3

const li = document.querySelectorAll('li')
const arrayLi = Array.from(li)
console.log(li)
console.log(arrayLi)


const obj = {
    0: 'Cassiano',
    1: 'thurow',
    2: 'teste',
    length: 3
}

console.log(obj)

const arrayObj = Array.from(obj)


console.log(Array.isArray(obj))//false  
console.log(Array.isArray(arrayObj))//true


const teste = Array.of(["1", "2", "3", "4"])


Array.of(10); // [10]
Array.of(1,2,3,4); // [1,2,3,4]
new Array(5); // [,,,,]
Array(5); // [,,,,]
Array(1,2,3,4); // [1,2,3,4]


const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
console.log(frutas.length)//3
console.log(frutas[1].length)//6
console.log(frutas[2][0].length)//8


const instrumentos2 = ['Guitarra', 'Baixo', 'Violão'];
instrumentos2.sort();
instrumentos2; // ['Baixo', 'Guitarra', Violão]

const idades = [32,21,33,43,1,12,8];
idades.sort();
idades; // [1, 12, 21, 32, 33, 43, 8]//alinha por caractere

const carros2 = ['Ford', 'Fiat', 'VW'];
carros2.unshift('Honda', 'Kia'); // 5
carros2; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

carros2.push('Ferrari'); // 6
carros2; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];


// const ul = document.querySelector('ul')
// const newItem = document.createElement('li');
// newItem.innerHTML = carros2.join(', ')

// ul.appendChild(newItem)

const carros3 = ['Ford', 'Fiat', 'VW', 'Honda'];
const primeiroCarro = carros3.shift(); // 'Ford'
carros3; // ['Fiat', 'VW', 'Honda'];

const ultimoCarro = carros3.pop(); // 'Honda'
carros3; // ['Fiat', 'VW'];


const carros4 = ['Ford', 'Fiat', 'VW', 'Honda'];
carros4.reverse(); // ['Honda', 'VW', 'Fiat', 'Ford'];


const carros5 = ['Ford', 'Fiat', 'VW', 'Honda'];
carros5.splice(1, 0, 'Kia', 'Mustang'); // []
carros5; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

carros5.splice(3, 2, 'Ferrari'); // ['Fiat', 'VW']
carros5; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']



// console.log(['item1', 'item2', 'item3', 'item4','item5'].copyWithin(2, 0 , 3))
// console.log(['item1', 'item2', 'item3', 'item4','item5'].copyWithin(-1))



// ['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana');
// // ['Banana', 'Banana', 'Banana', 'Banana']

// ['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 2);
// // ['Item1', 'Item2', 'Banana', 'Banana']

// ['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 1, 3);
// // ['Item1', 'Banana', 'Banana', 'Item4']


//métodos de acesso -> não altera a Array original;

const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];
const transportes = transporte1.concat(transporte2);
// ['Barco', 'Aviao', 'Carro', 'Moto'];

const maisTransportes = [].concat(transporte1, transporte2, 'Van');
// ['Barco', 'Aviao', 'Carro', 'Moto', 'Van'];


const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

linguagens.includes('css'); // true
linguagens.includes('ruby'); // false
linguagens.indexOf('python'); // 4
linguagens.indexOf('js'); // 2
linguagens.lastIndexOf('js'); // 5



const linguagens2 = ['html', 'css', 'js', 'php', 'python'];
linguagens2.join(); // 'html,css,js,php,python'
linguagens2.join(' '); // 'html css js php python'
linguagens2.join('-_-'); // 'html-_-css-_-js-_-php-_-python'

let htmlString = '<h2>Título Principal</h2>'
htmlString = htmlString.split('h2');
// ['<', '>Título Principal</', '>']
htmlString = htmlString.join('h1');
// <h1>Título Principal</h1>

const linguagens3 = ['html', 'css', 'js', 'php', 'python'];
linguagens3.slice(3); // ['php', 'python']
linguagens3.slice(1, 4); // ['css', 'js', 'php']

const cloneLinguagens = linguagens3.slice();
