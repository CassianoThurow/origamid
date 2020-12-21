const carros = ['Ford', 'Fiat', 'Honda'];
carros.forEach(function(item, index, array) {
  console.log(item.toUpperCase());
});

// com Arrow Function
carros.forEach((item, index, array) => {
  console.log(item.toUpperCase());
});


const li = document.querySelectorAll('li');

li.forEach( (i) => {i.classList.add ('active')})



carros.forEach((item, index, array) => {
    array[index] = 'Carro ' + item;
})

console.log(carros);



const arrayCarros = carros.map((item)=>{
 return  item 
})


const newCarros = carros.map((item) => {
  return 'Carro ' + item;
});

carros; // ['Ford', 'Fiat', 'Honda']
newCarros; // ['Carro Ford', 'Carro Fiat', 'Carro Honda']; 

const numeros = [2, 4, 6, 8, 10, 12, 14];
const numerosX3 = numeros.map(n => n * 3);

numerosX3; // [6, 12, 18, 24, 30, 36, 42];



const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const tempoAulas = aulas.map(aula => aula.min);
// [15, 10, 20, 25];

let puxarNomes = aula => aula.nome;
// let puxarNomes = (aula) => { return aula.nome };

const nomesAulas = aulas.map(puxarNomes);
// ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']

// function puxarNomes(aulas){
//  return aulas.nome
// }

// const arrayNomes = aulas.map(puxarNomes)


const aula = [10, 25, 30];

const reduceAulas = aula.reduce((acumulador, item) => {
  console.log(acumulador, item)
  return acumulador + item;
}, 0)


//Passo a passo:

// const aulas = [10, 25, 30];

// // 1
// aulas.reduce((0, 10) => {
//   return 0 + 10;
// }, 0); // retorna 10

// // 2
// aulas.reduce((10, 25) => {
//   return 10 + 25;
// }, 0); // retorna 35

// // 3
// aulas.reduce((35, 30) => {
//   return 35 + 30;
// }, 0); // retorna 65


console.log(reduceAulas)


const numeros2 = [10, 25, 60 , 5, 35, 10]

const menorValor = numeros2.reduce((anterior, atual) => {
  return anterior > atual ? atual : anterior
})

console.log(menorValor)