// Crie uma função para verificar se um valor é Truthy

function verificaTruthy(valor) {
  return !!valor;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(valor) {
  return valor * 4;
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  return `Olá, meu nome é ${nome} ${sobrenome}, prazer! 😊 `;
}

// Crie uma função que verifica se um número é par
function verificaPar(numero) {
  if (numero % 2 == 0) {
    return "Esse numero é par";
  } else {
    return "Esse numero não é par";
  }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function testaTipo(x) {
  return typeof x;
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener("scroll", () => {
  console.log("Cassiano Thurow");
});

// Corrija o erro abaixo

var totalPaises = 193; //retirar variável de dentro do escopo da função
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
