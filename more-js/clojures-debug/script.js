let item1 = 1;
function funcao1() {
  let item2 = 2;
  function funcao2() {
    let item3 = 3;
    console.log(item1);
    console.log(item2);
    console.log(item3);
  }
  funcao2();
}
//A funcao2 possui 4 escopos. O primeiro escopo é o Local, com acesso ao item3. O segundo escopo dá acesso ao item2, esse escopo é chamado de Clojure (funcao1) (escopo de função dentro de função). O terceiro escopo é o Script com acesso ao item1 e o quarto escopo é o Global/Window.


debugger; // adicione a palavra debugger
let item1 = 1;
function funcao1() {
  let item2 = 2;
  function funcao2() {
    let item3 = 3;
    console.log(item1);
    console.log(item2);
    console.log(item3);
  }
  funcao2();
}
//É possível "debugarmos" um código JavaScript utilizando ferramentas do browser ou através do próprio Visual Studio Code. Se o código possuir qualquer Web API, o processo deve ser feito no Browser. Plugins podem interferir no debug dentro do browser.

function contagem() {
    let total = 0;
    return function incrementar() {
      total++;
      console.log(total);
    }
  }
  
  const ativarIncrementar = contagem();
  ativarIncrementar(); // 1
  ativarIncrementar(); // 2
  ativarIncrementar(); // 3
  


  function $$(selectedElements) {
    const elements = document.querySelectorAll(selectedElements);
  
    function hide() {  }
    function show() {  }
    function on() {  }
    function addClass() {  }
    function removeClass() {  }
  
    return { hide, show, on, addClass, removeClass }
  }
  