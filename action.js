const menuToggle= document.querySelector('button.mobile-menu-toggle');
const mobileMenu= document.querySelector('nav.mobile-menu');

menuToggle.addEventListener('click', function () {
    mobileMenu.classList.add('open');
})

