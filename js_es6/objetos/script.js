var pessoa = {
    nome: 'Cassiano',
    idade: 25,
    profissao: 'FrontEnd',
    possuiFaculdade = true
}

pessoa.nome; //cassiano

var quadrado = {
    lados: 4,
    area(lado){
        return lado * lado;
    },
    perimento(lado) {
        return this.lados * lado;
 }
}
quadrado.lados //4
quadrado.area(5) //25
quadrado.perimento(5)//20


var btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  console.log("clicou");
});
