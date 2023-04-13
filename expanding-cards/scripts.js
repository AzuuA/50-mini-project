//recorrer cada lista tengo que eliminar a y agregar ddonde hce click
const panels= document.querySelectorAll('.panel')
function remove() {
    panels.forEach(rp=>{
        rp.classList.remove("a")
    })
}

panels.forEach( ap =>{
    ap.addEventListener('click',()=>{
        remove()
        ap.classList.add("a")
    })
}
)