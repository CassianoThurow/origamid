function createButton(text){
    function el(){
        const buttonEl = document.createElement('button');
        buttonEl.innerText = text;
        return buttonEl;
    }
    return {
        element: el,
        text: text,
      }
}
const comprarBtn = createButton('Comprar');



function criarPessoa(nome, sobrenome) {
    const nomeCompleto = `${nome} ${sobrenome}`;
  
    function andar() {
      return `${nomeCompleto} andou`;
    }
    function nadar() {
      return `${nomeCompleto} nadou`;
    }
    return {
      nome,
      sobrenome,
      andar,
      nadar,
    }
  }
  
  const designer = criarPessoa('André', 'Rafael');
  

  'use strict';

function criarPessoa(nome, sobrenome) {
  const nomeCompleto = `${nome} ${sobrenome}`;
  function andar() {
    return `${nomeCompleto} andou`;
  }
  return Object.freeze({
    nome,
    sobrenome,
    andar,
  });
}

const designer = criarPessoa('André', 'Rafael');


function Pessoa(nome) {
    if (!(this instanceof Pessoa)) // ou (!new.target)
      return new Pessoa(nome);
    this.nome = nome;
  }
  
  Pessoa.prototype.andar = function() {
    return `${this.nome} andou`;
  }
  
  const designer = Pessoa('André');
  