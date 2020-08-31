// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var dados = {
  nome: "Cassiano",
  sobrenome: "Thurow",
  idade: 25,
};

// Crie um método no objeto anterior, que mostre o seu nome completo

dados.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: "Labrador",
  cor: "Preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa === "homem") {
      return "latiu";
    } else {
      return "Nada";
    }
  },
};

// nomeie 3 propriedades ou métodos de strings
var nome = "cassio";

nome.length;
nome.fontsize();
nome.toLocaleLowerCase();

// nomeie 5 propriedades ou métodos de elementos do DOM

var btn = document.querySelector(".btn");

btn.addEventListener;
btn.removeAttribute;
btn.appendChild;

// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

document.execCommand("copy");
document.execCommand("cut");
document.execCommand("paste");
