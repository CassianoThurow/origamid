// const h1 = document.querySelector( 'h1')

// const animaisList = document.querySelector( '.animais-lista')

// console.log(h1.innerHTML)
// console.log(animaisList.innerHTML)


// console.log(animaisList.parentElement)

const lista = document.querySelector('.animais-lista');

// lista.parentElement; // pai
// lista.parentElement.parentElement; // pai do pai
// lista.previousElementSibling; // elemento acima
// lista.nextElementSibling; // elemento abaixo

// lista.children; // HTMLCollection com os filhos
// lista.children[0]; // primeiro filho
// lista.children[--lista.children.length]; // último filho

// lista.querySelectorAll('li'); // todas as LI's
// lista.querySelector('li:last-child'); // último filho


// console.log(lista.previousSibling)

const animais = document.querySelector( '.animais')
const contato = document.querySelector( '.contato')
const titulo = contato.querySelector('.titulo')
const mapa = document.querySelector( '.mapa')

// animais.appendChild(titulo)
// contato.replaceChild(mapa, titulo)
// contato.removeChild(titulo)
// contato.insertBefore(animais, titulo)



const novoH1 = document.createElement('h1');
// novoH1.innerText = "novo titulo"
// novoH1.classList.add('titulo')
// console.log(novoH1)

// mapa.appendChild(novoH1)

const h1 = document.querySelector('h1')
const faq = document.querySelector( '.faq')

const cloneH1 = h1.cloneNode(true)
cloneH1.classList.add('ativo')
faq.appendChild(cloneH1)