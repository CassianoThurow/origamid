function dropdownMenu(){

}

const dropdownMenus = document.querySelectorAll('[data-dropdown]')


dropdownMenus.forEach((i)=>{
    ['touchstart', 'click'].forEach(userEvent =>{
        i.addEventListener(userEvent, handleClick)
    })
})


function handleClick(e){
    e.preventDefault()
   this.classList.toggle('active')
}












export default dropdownMenu;