function perimetroForma(lado, totalLados = 4) {
    return lado * totalLados;
  }
  
  perimetroForma(10, 5); // 50
  perimetroForma(10); // 40
  

//   function perimetroForma(lado, totalLados = 4) {
//     console.log(arguments)
//     return lado * totalLados;
//   }
  
//   perimetroForma(10);
//   perimetroForma(10, 4, 20);
  


  function anunciarGanhadores(...ganhadores) {
    ganhadores.forEach(ganhador => {
      console.log(ganhador + ' ganhou.')
    });
  }
  
  anunciarGanhadores('Pedro', 'Marta', 'Maria');
  

const frutas = ['Banana', 'Uva', 'Morango'];
const legumes = ['Cenoura', 'Batata'];

const comidas = [...frutas, 'Pizza', ...legumes];


const numeroMaximo = Math.max(4,5,20,10,30,2,33,5); // 33

const listaNumeros = [1,13,21,12,55,2,3,43];
const numeroMaximoSpread = Math.max(...listaNumeros);



const btns = document.querySelectorAll('button');
const btnsArray = [...btns];

const frase = 'Isso é JavaScript';
const fraseArray = [...frase];
