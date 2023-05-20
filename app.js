let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    navbar.classList.toggle('open');
    menu.classList.toggle('fa-close');
});

// **********************************
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('stiky', window.scrollY > 0);
});

// ********************************

window.onscroll = () => {
    navbar.classList.remove('open');
    menu.classList.remove('fa-close');
};