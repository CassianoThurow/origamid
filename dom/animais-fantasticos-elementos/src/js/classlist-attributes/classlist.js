// const menu = document.querySelector('.menu')

// console.log(menu)

// menu.classList.add('ativo', 'teste');
// menu.classList.remove( 'teste');
// menu.classList.toggle('open');

// if(menu.classList.contains('open')){
//     menu.classList.add('its-open')
// }


const animais = document.querySelector('.animais')

console.log(animais.attributes)


const img = document.querySelector('img');
console.log(img.setAttribute('alt', 'texto'));//adiciona atribuitos
console.log(img.getAttribute('alt'))
console.log(img.hasAttribute('id'))// verifica se possui o atributo;



const animais = document.querySelector('.animais');

animais.className; // string com o nome das classes
animais.className = 'azul'; // substitui completamente a string
animais.className += ' vermelho'; // adiciona vermelho à string

animais.attributes = 'class="ativo"'; // não funciona, read-only
