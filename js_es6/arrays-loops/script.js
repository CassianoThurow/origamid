let array = [1, 2, 3, 4];

array[0]; //1

function retornaArray(array) {
  return array;
}

console.log(retornaArray(array));
//[1, 2, 3, 4]

//o for loop possui 3 partes: o inicio, condição(true) e incremento.
for (var i = 0; i <= 3; i++) {
  console.log(i);
}

//While loop

var i = 0;
while (i <= 2) {
  console.log(i);
  i++;
}
//Retorna de 0 a 9 no console.

var videoGames = ["PC", "PS4", "XBOX", "3ds"];

for (var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
  if (videoGames[item] === "PS4") {
    break; //quebra o loop
  }
}

videoGames.forEach(function (item, index, array) {
  console.log(item, index, array);
});
