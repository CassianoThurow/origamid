const div = document.querySelector('div')

div.dataset.height = 1000

console.log(div.dataset)

delete div.dataset.height

div.dataset.totalHeight = 2000

console.log(div.dataset)
 
