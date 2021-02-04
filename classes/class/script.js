//constructor function
    // function Button(text, background) {
    //     this.text = text;
    //     this.background = background;
    //   }
    
    //   Button.prototype.element = function() {
    //     const buttonElement = document.createElement('button');
    //     buttonElement.innerText = this.text;
    //     buttonElement.style.background = this.background;
    //     return buttonElement;
    //   }
    
    //   const blueButton = new Button('Comprar', 'blue');
    

// class Button {
//     constructor(text, background){
//         this.text = text;
//         this.background = background;
//     }
//     el(){
//       const buttonEl = document.createElement('button') ;
//         buttonEl.innerText = this.text;
//         buttonEl.style.background = this.background;
//       return buttonEl
//     }
// }

// const blueButton = new Button('Comprar', 'blue')

// console.log(blueButton.el())



class Button {
    constructor(op){
       this.options = op; 
    }
}


const btnOptions = new Button ({
    backgroundColor: 'blue',
    text: 'Comprar',
    color: 'white'
})


class Button {
    constructor(text) {
      this.text = text;
    }
    static create(background) {
      const elementButton = document.createElement('button');
      elementButton.style.background = background;
      elementButton.innerText = 'Clique';
      return elementButton;
    }
  }
  
  const blueButton = Button.create('blue');
  



  class Button {
    constructor(text, background) {
      this.text = text;
      this.background = background;
    }
    element() {
      const elementButton = document.createElement('button');
      elementButton.innerText = this.text;
      elementButton.style.background = this.background;
      return elementButton
    }
    static createBlue(text) {
      return new Button(text, 'blue');
    }
  }
  
  const blueButton = Button.createBlue('Comprar');
  