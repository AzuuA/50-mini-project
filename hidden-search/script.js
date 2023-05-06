const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

//toggle es para sacar o agregar la clase
//focus()espara podes escribir 

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})