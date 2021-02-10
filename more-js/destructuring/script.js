const carro = {
    marca: 'fiat',
    ano: 2018,
    porta: 4
}

const {ano, marca} = carro

console.log(ano)
console.log(marca)
console.log(carro)


const cliente = {
    nome: 'Andre',
    compras: {
      digitais: {
        livros: ['Livro 1', 'Livro 2'],
        videos: ['Video JS', 'Video HTML']
      },
      fisicas: {
        cadernos: ['Caderno 1']
      }
    }
  }
  
  console.log(cliente.compras.digitais.livros);
  console.log(cliente.compras.digitais.videos);
  

  

  const {fisicas, digitais, digitais: {livros, videos}} = cliente.compras;

console.log(fisicas);
console.log(livros);
console.log(videos);
console.log(digitais);


const frutas = ['Banana', 'Uva', 'Morango'];

const primeiraFruta = frutas[0];
const segundaFruta = frutas[1];
const terceiraFruta = frutas[2];

// Com destructuring
const [primeira, segunda, terceira] = frutas;


function handleKeyboard(event) {
    console.log(event.key);
  }
  // Com Destructuring
  function handleKeyboard({key}) {
    console.log(key);
  }
  
  document.addEventListener('keyup', handleKeyboard);
  