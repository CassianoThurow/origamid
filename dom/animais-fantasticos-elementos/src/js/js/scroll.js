const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

function smoothScroll(e){
e.preventDefault();
const href = e.currentTarget.getAttribute('href')
const section = document.querySelector(href)


section.scrollIntoView({
    behavior: 'smooth',
    block: "start",
});



// const topo = section.offsetTop
// window.scrollTo({
//     top: topo,
//     behavior: 'smooth',
// })
}

linksInternos.forEach((link)=>{
    link.addEventListener('click', smoothScroll)
})