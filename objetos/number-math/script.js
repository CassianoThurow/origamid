const ano = 2020;

const preco = new Number(99.50)


console.log(Number.isNaN(NaN))//true
console.log(Number.isNaN(5))//false


console.log(Number.isInteger(20))//true
console.log(Number.isInteger(20.6))//false

console.log(Number.parseFloat('99.50'))
console.log(Number.parseInt('99.50'))


const preco2 = 2.99

preco2.toFixed()//3

const carro = 20900
console.log(+carro.toFixed()) //retorna String, adicionando o + retorna Number


console.log(carro.toString())//retorna string


console.log(preco2.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))



//Math

console.log(Math.PI)
console.log(Math.abs(3-4)) // retorna o numero absoluto, transforma o negativo em positivo
Math.ceil(4.8334); // 5
Math.ceil(4.3); // 5
Math.floor(4.8334); // 4
Math.floor(4.3); // 4
Math.round(4.8334); // 5
Math.round(4.3); // 4

Math.max(5,3,10,42,2); // 42
Math.min(5,3,10,42,2); // 2

Math.random(); // 0.XXX
Math.floor(Math.random() * 100); // entre 0 e 100
Math.floor(Math.random() * 500);  // entre 0 e 500

// Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32; 
Math.floor(Math.random() * (max - min + 1)) + min;

