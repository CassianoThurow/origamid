async function puxarDados(){
 try {
    const dadosResponse = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const dadosJSON = await dadosResponse.json();


    document.body.innerText = dadosJSON.results[1].name
 
} catch (err){
    console.log(err)
}
}
puxarDados()


async function iniciarAsync() {
    const dadosResponse = fetch('./dados.json');
    const clientesResponse = fetch('./clientes.json');
  
    // ele espera o que está dentro da expressão () ocorrer primeiro
    const dadosJSON = await (await dadosResponse).json();
    const clientesJSON = await (await clientesResponse).json();
  }
  iniciarAsync();
  

  async function asyncSemPromise() {
    // Console não irá esperar.
    await setTimeout(() => console.log('Depois de 1s'), 1000);
    console.log('acabou');
  }
  asyncSemPromise();
  
  async function iniciarAsync() {
    await new Promise(resolve => {
      setTimeout(() => resolve(), 1000)
    });
    console.log('Depois de 1s');
  }
  iniciarAsync();
  