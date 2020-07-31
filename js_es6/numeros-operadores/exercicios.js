// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20; //35
console.log(total);

// Crie duas expressões que retornem NaN
var teste1 = "comprei 10" / 5;
console.log(teste1);
var teste2 = "isso é uma string";
console.log(+teste2);

// Somar a string '200' com o número 50 e retornar 250
var somar = +"200" + 50;
console.log(somar);

// Incremente o número 5 e retorne o seu valor incrementado
var x = 5;
x++;
console.log(x);

// Como dividir o peso por 2?
var numero = "80";
var unidade = "kg";
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

var numero = +"80" / 2;
var unidade = "kg";
var peso = numero + unidade; // '80kg'

console.log(peso);
