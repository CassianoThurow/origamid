const controls = document.getElementById('controls');
const cssText = document.querySelector('.css')
const btn = document.querySelector('.btn');
controls.addEventListener('change', handleChange)


const handleStyles = {
    element: btn,
    backgroundColor(value){
        this.element.style.backgroundColor = value
    },
    color(value){
        this.element.style.color = value
    },
    height(value){
        this.element.style.height = value + 'px'
    },
    width(value){
        this.element.style.width = value + 'px'
    },
    texto(value){
        this.element.innerText = value
    },
    border(value){
        this.element.style.border = value
    },
    borderRadius(value){
        this.element.style.borderRadius = value + 'px'
    },
    fontFamily(value){
        this.element.style.fontFamily = value
    },
    fontSize(value){
        this.element.style.fontSize = value + 'rem'
    }
}



function handleChange(event){
    const name = event.target.name
    const value = event.target.value
    
    handleStyles[name](value)
    saveValues(name, value)
    showCss();
}

function saveValues(name, value){
    localStorage[name] = value;
}




function setValues(){
    const properties = Object.keys(localStorage)
    properties.forEach( prop => {
        handleStyles[prop](localStorage[prop])
        controls.elements[prop].value = localStorage[prop]
    });
    showCss();
}
setValues();

function showCss(){
    cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>')
}


