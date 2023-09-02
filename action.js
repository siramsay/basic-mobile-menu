const menuToggle= document.querySelector('button.mobile-menu-toggle');
const mobileMenu= document.querySelector('nav.mobile-menu');
const mainContent= document.querySelector('main');
const body = document.querySelector('body');

menuToggle.addEventListener('click', function () {

  if(mobileMenu.classList.contains('open')){
    mobileMenu.classList.remove('open');
    menuToggle.innerHTML = 'Menu';
    mainContent.removeAttribute('inert');
    body.classList.remove("mobile-menu-active");
  } else {
    mobileMenu.classList.add('open');
    menuToggle.innerHTML = 'Close';
    mainContent.setAttribute('inert', 'true');
    body.classList.add("mobile-menu-active");
  }
})

