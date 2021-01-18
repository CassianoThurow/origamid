import outsideClick from './outsideclick.js'

function menuMobile(){
    const menuButton = document.querySelector('[data-menu="mobile"]')
const menuList = document.querySelector('[data-menu="list"]')

function openMenu(e){
    menuList.classList.add('active')
    menuButton.classList.add('active')
    outsideClick(menuList, ['click', 'touchstart'], ()=>{
        menuList.classList.remove('active')
        menuButton.classList.remove('active') 
    })
}





menuButton.addEventListener('click', openMenu)






}



export default menuMobile;