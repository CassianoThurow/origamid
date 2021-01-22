// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar


const inputCep = document.getElementById('cep')
const btnCep = document.getElementById('btnCep')
const result = document.querySelector('.result')

btnCep.addEventListener('click', handleClick)

function handleClick(e){
    e.preventDefault()
    const cep = inputCep.value
    buscaCep(cep)
}

function buscaCep(cep){
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(res => res.text())
    .then(body => {
        result.innerText = body
    })
}



// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const btcDisplay = document.querySelector('.btc')

function fetchBtc(){
    fetch('https://blockchain.info/ticker')
    .then(res => res.json())
    .then(btcJson =>{
        btcDisplay.innerText = ('R$ ' + btcJson.BRL.buy).replace('.', ',')
    })
}

setInterval(fetchBtc, 500)

fetchBtc()


// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima


const piada = document.querySelector('.piada')
const nextJoke = document.querySelector( '.btnNext')

function puxarPiada(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .then(joke => {
     piada.innerText = joke.value
    })
}

nextJoke.addEventListener('click', puxarPiada)


puxarPiada()