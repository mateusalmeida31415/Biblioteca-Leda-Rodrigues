let $open = document.querySelector('.box-navegation-icon')
let $close = document.querySelector('.box-navegation-menu-close')

let $menu = document.querySelector('.hide-menu')

$open.addEventListener('click', () => {
    $menu.classList.add('box-navegation-menu-open-menu-btn')
})

$close.addEventListener('click', () => {
    $menu.classList.remove('box-navegation-menu-open-menu-btn')
})