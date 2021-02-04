const button = {
    get size(){
        return this.value || 100
    },
    set size(value){
        this.value = value
    }
}


const frutas = {
    lista: [],
    set new(fruta){
      this.lista.push(fruta)
    }
}

frutas.new = 'banana'
frutas.new = 'morango'



class Button {
    constructor(text, color){
        this.text = text;
        this.color = color;
    }
    get el(){
        const type = this.elementType || 'button'
       const buttonEl = document .createElement(type)
       buttonEl.innerText = this.text;
       buttonEl.style.color = this.color
        return buttonEl;
    }
    set el(type){
        this.elementType = type
    }
}

const blueButton = new Button('Comprar', 'blue')