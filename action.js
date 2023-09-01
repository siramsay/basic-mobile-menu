const menuToggle= document.querySelector('button.mobile-menu-toggle');
const mobileMenu= document.querySelector('nav.mobile-menu');
const mainContent= document.querySelector('main');

menuToggle.addEventListener('click', function () {

  if(mobileMenu.classList.contains('open')){
    mobileMenu.classList.remove('open');
    menuToggle.innerHTML = 'Menu';
    mainContent.removeAttribute('inert');
  } else {
    mobileMenu.classList.add('open');
    menuToggle.innerHTML = 'Close';
    mainContent.setAttribute('inert', 'true');
  }
})

