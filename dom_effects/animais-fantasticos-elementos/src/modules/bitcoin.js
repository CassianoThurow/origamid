function initBitcoins() {

}






fetch('https://blockchain.info/ticker')
.then(res => res.json())
.then(data => {
    const btcPreco = document.querySelector('.btc-preco')
    btcPreco.innerText = (1000 / data.BRL.sell).toFixed(4)
}).catch(err => {
    console.error(err)
})







export default initBitcoins;
