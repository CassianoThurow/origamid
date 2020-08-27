function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(2));

function pi() {
  return 3.14;
}

var total = 5 * pi();
console.log(total);

function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}

console.log(imc(76, 1.93));

function corFavorita(cor) {
  if (cor === "azul") {
    return "Eu gosto do ceu";
  } else if (cor === "verde") {
    return " eu gosto da florents";
  } else {
    return "eu nao gosto de nada";
  }
}

console.log(corFavorita("verde"));

addEventListener("click", function () {
  console.log("Clicou");
});

//A função possui dois argumentos
//Primero é uma string 'click'
//Segundo é uma função anonima

function imc2(peso, altura) {
  var imc2 = peso / altura ** 2;
  return imc2;
}

function verificaTerceiraIdade(idade) {
  if (idade >= 60) {
    return " É da terceira idade";
  } else {
    return "Não é da terceira idade";
  }
}
