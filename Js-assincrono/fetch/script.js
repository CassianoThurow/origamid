// fetch('../assincrono.txt').then((res)=>{
//     return res.text()
// }).then((body)=>{
//     const content = document.querySelector('.content')
//     content.innerText = body
// })


// fetch('https://viacep.com.br/ws/01001000/json/')
// .then(response => response.json())
// .then(cep => {
//   console.log(cep.bairro, cep.logradouro);
// });


// const styleElement = document.createElement('style');

// fetch('./style.css')
// .then(response => response.text())
// .then(style => {
//   styleElement.innerHTML = style;
//   document.body.appendChild(styleElement);
// });




// const div = document.createElement('div');
// const about = fetch('./sobre.html')
// about.then(response => response.text())
// .then(body => {
//     div.innerHTML = body

//     const title = div.querySelector('h1')
//     const txt = div.querySelector('p')

//     console.log(title)

//     document.body.appendChild(title)
//     document.body.appendChild(txt)

// })


// const div = document.createElement('div');

// const img = fetch('./imagem.png')
// img.then(response => response.blob())
// .then(imgBlob => {
//     const blobUrl = URL.createObjectURL(imgBlob)
//     const imagemDom = document.querySelector( 'img')
//     imagemDom.src=blobUrl
//     imagemDom.alt="origamid"
// });



// const div = document.createElement('div');

// fetch('https://viacep.com.br/ws/01001000/json/')
// .then(response => {
//   const cloneResponse = response.clone();
//   response.json().then(json => {
//     console.log(json)
//   });
//   cloneResponse.text().then(text => {
//     console.log(text)
//   });
// });


// const div = document.createElement('div');

// fetch('https://viacep.com.br/ws/01001000/json/')
// .then(response => {
//   response.headers.forEach(console.log);
// });



// const div = document.createElement('div');

// fetch('https://viacep.com.br/ws/01001000/json/')
// .then(response => {
//   console.log(response.status, response.ok);
//   if(response.status === 404) {
//     console.log('Página não encontrada')
//   }
// });



const div = document.createElement('div');

fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => {
  console.log(response.type, response.url);
});

//types
// basic: feito na mesma origem
// cors: feito em url body pode estar disponível
// error: erro de conexão
// opaque: no-cors, não permite acesso de outros sites
