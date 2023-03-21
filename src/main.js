import './style.css'

const burgerMenuBtn = document.getElementById('burger-menu');
const menuCloseBtn = document.getElementById('menu-close-btn');
const mobileMenu = document.getElementById('mobile-nav');

burgerMenuBtn.addEventListener('click', (e) => {
    mobileMenu.dataset.menu = "open"
})

menuCloseBtn.addEventListener('click', (e) => {
    mobileMenu.dataset.menu = "close"
})
