// NAVBAR SCROLL

const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 50) {
        nav.classList.add('active')
    }else {
        nav.classList.remove('active')
    }
}

// INTERFAZ CARGA

window.onload = function carga() {
    var contenedor = document.getElementById('loader-principal')
        contenedor.style.visibility = 'hidden';
        contenedor.style.opacity = '0';  
}

// RESPONSIVE

addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn-menu')
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu-items')
            menu_items.classList.toggle('show')
        })
    }
})