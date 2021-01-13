// Verifique a distância da primeira imagem
// em relação ao topo da página

const img = document.querySelector('img')
const imgTop = img.offsetTop
console.log(imgTop)

// Retorne a soma da largura de todas as imagens

function somaImagens(){
const imgs = document.querySelectorAll('img')
let sum = 0
imgs.forEach((img)=>{
    sum = sum + img.offsetWidth
})
    console.log(sum)
}
window.onload = () => {
    somaImagens()
}


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a')
console.log(links)

links.forEach((link)=>{
    const linkWidth = link.offsetWidth
    const linkheight = link.offsetHeight
    if(linkWidth >= 48 && linkheight >= 48){
        console.log(link, 'possui acessibilidade')
    }else{
        console.log(link, 'não possui acessibilidade')
    }
})


// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const menuMobile = window.matchMedia('(max-width: 720px)').matches
if(menuMobile){
const menu = document.querySelector('.menu')
    menu.classList.add('menu-mobile')
}