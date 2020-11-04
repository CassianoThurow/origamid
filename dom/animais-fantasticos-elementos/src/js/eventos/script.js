const img = document.querySelector('img')

function callback(){
    console.log( 'clicou')
}

img.addEventListener( 'click', callback)

////////////////////////////////

const animaisLista = document.querySelector('.animais-lista')

function executarCallback(e){
    console.log(e.currentTarget)
}

animaisLista.addEventListener( 'click', executarCallback)

////////////////////////////////

const linkExterno = document.querySelector('a[href^="https://"]')


function noRedirect(event){
    event.preventDefault()
    console.log(this)
}

linkExterno.addEventListener('click', noRedirect)


////////////////////////////////


const h1 = document.querySelector('h1')

function handleEvent(e){
    console.log(e)
}


// h1.addEventListener('click', handleEvent)
// h1.addEventListener('mouseenter', handleEvent)
// h1.addEventListener('mousemove', handleEvent)
// window.addEventListener('scroll', handleEvent)
// window.addEventListener('resize', handleEvent)
// window.addEventListener('keydown', handleEvent)


function handleKeyboard(e){
    if(e.key === 'f'){
       document.body.classList.toggle('fullscreen')
    }
    console.log(e)
}

window.addEventListener('keydown', handleKeyboard)


////////////////////////////////

const imgs = document.querySelectorAll('img')

function handleImg(e){
    console.log(e.currentTarget.getAttribute('src'))
}


imgs.forEach(img => {
    img.addEventListener('click', handleImg)
})