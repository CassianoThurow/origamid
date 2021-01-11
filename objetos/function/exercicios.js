// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const paragrafos = document.querySelectorAll('p')

const totalCaractere = Array.prototype.reduce.call(paragrafos, (acc, item) =>{
    return acc + item.innerText.length;
},0)


console.log(totalCaractere)


// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function createElement(tag, classe, content){
    const elemento = document.createElement(tag)
    classe ? elemento.classList.add(classe) : null
    content ? elemento.innerHTML = content : null

    return elemento;
}

console.log(createElement('ul', 'ativo', 'Esse é um conteudo'))

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const createH1 = createElement.bind(null, 'h1', 'titulo')

console.log(createH1('curso novo'))