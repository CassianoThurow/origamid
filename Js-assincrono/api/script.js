fetch('https://pokeapi.co/api/v2/pokemon/')
.then(res => res.json())
.then(pokemon => {
  console.log(pokemon);
});


const url = 'https://jsonplaceholder.typicode.com/posts/';

const options ={
    method: 'POST',
    body: '{"title": "javascript"}',
    headers: {'Content-Type': 'application/json'}
}

fetch(url, options)
.then(res => res.json())
.then(json => {
    console.log(json);
})