const form = document.querySelector('#contato')
console.log(form.elements.mensagem)
console.log(document.forms[0].elements[0])


const data = {}


function handleChange(e){
    data[e.target.name] = e.target.value
}



// function handleChange(e){
//     const target = e.target

//     if(!target.checkValidity()){
//         target.classList.add('invalid')
//         target.setCustomValidity('Esse campo é obrigatório')
//         target.nextElementSibling.innerText = target.validationMessage
//     }
// }


// function handleKeyUp(event){
//     if(event.target.checked){
//         console.log(event.target.value)
//     }
   
//     document.body.style.backgroundColor = event.target.value

// }


// form.addEventListener('change', handleChange)
// form.addEventListener('change', handleKeyUp)







