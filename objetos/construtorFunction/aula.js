// const Dom = {
//     seletor: 'li',
//     element(){
//       return document.querySelector(this.seletor)
//     },
//     ativar(){
//     this.element().classList.add('ativar')
//     }
// }


function Dom(seletor){
    this.element = () => {
        return document.querySelector(seletor)
    }
    this.ativar = () => {
        this.element().classList.add('ativar')
    }
}

const li = new Dom('li')