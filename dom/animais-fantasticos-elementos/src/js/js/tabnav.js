function initTab(){
const tabMenu = document.querySelectorAll('.js-tabmenu li')
const tabContent = document.querySelectorAll('.js-tab-content section')

if(tabMenu.length && tabContent.length){

tabContent[0].classList.add('active')


function activeTab(index){
    tabContent.forEach((section)=>{
        section.classList.remove('active') 
    })
    tabContent[index].classList.add('active')
}

tabMenu.forEach((item, index)=>{
    item.addEventListener('click',()=>{
        activeTab(index)
    })
})
}
}
initTab()