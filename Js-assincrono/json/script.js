fetch('./dados.json')
.then(res => res.json())
.then(body => {
    body.forEach(name =>{
        console.log(name.nome)
    })
})


const config = {
    player: "google",
    tempo: 25.5,
    aula: "1.0 HTML"
}




const stringConfig = JSON.stringify(config)

console.log(config)
console.log(stringConfig)

