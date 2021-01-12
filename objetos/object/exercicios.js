// Crie uma função que verifique
// corretamente o tipo de dado

function verificaTipo(value) {
    return Object.prototype.toString.call(value)
}



// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const square = {}

Object.defineProperties(square,{
    lado:{
        value: 4,
        writable: false
    }
})



// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
    width: 800,
    height: 600,
    background: '#333'
  }
  
  Object.freeze(configuracao);


  // Liste o nome de todas
  // as propriedades do
  // protótipo de String e Array
  

  console.log(Object.getOwnPropertyNames(String.prototype))
  console.log(Object.getOwnPropertyNames(Array.prototype))
