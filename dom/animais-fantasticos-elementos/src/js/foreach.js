const imgs = document.querySelectorAll("img");

imgs.forEach( (img, i, array) => {
  // console.log(img,i,array) ;
});

const titulos = document.getElementsByClassName("titulo");
console.log(titulos)

const arrayTitulos = Array.from(titulos)

console.log(arrayTitulos)


//arrow function
arrayTitulos.forEach( item => console.log(item));