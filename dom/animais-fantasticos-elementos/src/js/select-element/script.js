const gridSection = document.getElementsByClassName("grid-section");

console.log(gridSection);

const primeiraLi = document.querySelector("li");
console.log(primeiraLi);

const linkInterno = document.querySelector('[href^="#"]');

console.log(linkInterno);

const animaisImg = document.querySelectorAll(".animais img");

console.log(animaisImg);

const titulo = document.querySelector(".titulo");

const gridSelectionHTML = document.getElementsByClassName("grid-section");

const gridSectionNode = document.querySelectorAll(".grid-section");

titulo.classList.add("grid-section");

console.log(gridSelectionHTML);
console.log(gridSectionNode); //Atualiza em tempo real

gridSectionNode.forEach((item, index) => {
  console.log(item);
});

const arrayGrid = Array.from(gridSelectionHTML); //transformar em um array

arrayGrid.forEach((item) => {
  console.log(item);
});
