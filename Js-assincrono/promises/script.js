// const promessa = new Promise((resolve, reject) =>{
//  let condition = true;
//     if(condition){
//     resolve({nome: 'Cassiano', idade: 25});
// }else
//     reject(Error('Um erro ocorreu'))
// })

// promessa.then((resolucao)=>{
//     console.log(resolucao)
// })


// const promessa2 = new Promise((resolve, reject) => {
//     let condition = true;
// if(condition){
//     setTimeout(() => {
//       resolve({nome: 'Cassiano', idade: 25});
//     }, 1000 );
// } else {
//     reject(Error('um erro ocorreu'))
// }
//   });
  
//  const retorno =  promessa2
//  .then(resolucao2 => {
//      resolucao2.profissao = "front-end";
//      return resolucao2
// })
//  .then(resolucao2 => {
//      console.log(resolucao2)
// })
//  .catch(err =>{
//      console.log(err)
//  })
//  .finally(()=>{
//      console.log('acabou')
//  })
//   console.log(retorno)


const login = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve('Logado com sucesso') 
    }, 1000)
})

const data = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve('loaded data') 
    }, 1500)
})



const fullLoad = Promise.all([login, data])
fullLoad.then((resolucao) =>{
    console.log(resolucao)
})