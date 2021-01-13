const section = document.querySelector('.animais');

console.log(section.clientHeight); // height + padding
console.log(section.offsetTop); // height + padding + border
console.log(section.scrollHeight); // height total, mesmo dentro de scroll

const primeiroh2 = document.querySelector('h2')


const rect = primeiroh2.getBoundingClientRect();
console.log(rect)


