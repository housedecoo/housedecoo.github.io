const toggleNavbar = document.querySelector('.mobile-nav-toggle')
const linksContainer = document.querySelector('nav .links-container')

toggleNavbar.addEventListener('click', ()=>{
    linksContainer.classList.toggle('active')
    console.log(linksContainer, toggleNavbar)

    if(linksContainer.classList.contains('active')){
        bodyEl = document.querySelector('body')
        bodyEl.addEventListener('click', (e)=>{
            e.stopPropagation()
            linksContainer.classList.remove('active')
        })
    }
})


