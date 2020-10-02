// Retorne no console todas as imagens do site

const retornaImagem = document.querySelectorAll("img");
console.log(retornaImagem);

// Retorne no console apenas as imagens que começaram com a palavra imagem

const imagemAnimais = document.querySelectorAll(
  'img[src^="assets/img/imagem"]'
);
console.log(imagemAnimais);

// Selecione todos os links internos (onde o href começa com #)

const linkInterno = document.querySelectorAll('[href^="#"]');
console.log(linkInterno);

// Selecione o primeiro h2 dentro de .animais-descricao

const fristH2 = document.querySelector(".animais-descricao h2");
console.log(fristH2);

// Selecione o último p do site

const p = document.querySelectorAll("p");
console.log(p[p.length - 1]);
