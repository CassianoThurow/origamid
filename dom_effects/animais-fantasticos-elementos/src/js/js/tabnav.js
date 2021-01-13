function initTab(){
const tabMenu = document.querySelectorAll('[data-tab="menu"] li')
const tabContent = document.querySelectorAll('[data-tab="content"] section')

if(tabMenu.length && tabContent.length){

tabContent[0].classList.add('active')


function activeTab(index){
    tabContent.forEach((section)=>{
        section.classList.remove('active') 
    })
    const direction = tabContent[index].dataset.anime
    tabContent[index].classList.add('active', direction)
}

tabMenu.forEach((item, index)=>{
    item.addEventListener('click',()=>{
        activeTab(index)
    })
})
}
}
initTab()