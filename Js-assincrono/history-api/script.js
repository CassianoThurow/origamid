// console.log(window.history);


// window.history.pushState(null, null, 'teste.html')


const links = document.querySelectorAll('a')

function handleClick(e){
    e.preventDefault();
    fetchPage(e.target.href);
    window.history.pushState(null, null, e.target.href)
}

async function fetchPage(url){
    const pageRes = await fetch(url)
    const pageText = await pageRes.text()
    repaceContent(pageText)
}

function repaceContent(newContent){
    const newHtml = document.createElement('div')
    newHtml.innerHTML = newContent

    const oldContent = document.querySelector('.content')
    const newContentPage =  newHtml.querySelector('.content')

    oldContent.innerHTML = newContentPage.innerHTML;
    document.title = newHtml.querySelector('title').innerText



}

window.addEventListener('popstate', ()=>{
    fetchPage(window.location.pathname)
})


links.forEach((link) => {
    link.addEventListener('click', handleClick)
})