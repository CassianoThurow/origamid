// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const links = document.querySelectorAll('a[href^="#"]')
console.log(links)


function active(e){
    e.preventDefault()
    links.forEach((link) => {
        link.classList.remove('ativo')
    })
    this.classList.toggle('ativo')
}


links.forEach((link)=>{
    link.addEventListener( 'click', active)
})




// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const allElements = document.querySelectorAll('body *')

function handleElement(e){
    console.log(e.currentTarget)
}


allElements.forEach((item)=>{
    item.addEventListener( 'click', handleElement)
})


console.log(allElements)


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// e.currentTarget.remove()




// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
 function handlePressT(e){
     console.log(e.key)
     if(e.key ==='t'){
       document.documentElement.classList.toggle('textomaior') 
     }
 }

 window.addEventListener('keydown', handlePressT)