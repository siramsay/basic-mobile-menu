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

// Get the HTML element and toggle button
const htmlElement = document.documentElement;
const scrollbarToggle = document.getElementById('scrollbarToggle');

// Check if the scrollbar-gutter is currently enabled
function isScrollbarGutterEnabled() {
  return htmlElement.classList.contains('scrollbar-gutter-stable');
}

// Toggle the scrollbar-gutter class
function toggleScrollbarGutter() {
  if (isScrollbarGutterEnabled()) {
    htmlElement.classList.remove('scrollbar-gutter-stable');
    scrollbarToggle.textContent = 'Enable Scrollbar';
  } else {
    htmlElement.classList.add('scrollbar-gutter-stable');
    scrollbarToggle.textContent = 'Disable Scrollbar';
  }
}

// Add event listener to the toggle button
scrollbarToggle.addEventListener('click', toggleScrollbarGutter);

// Initialize the button text based on current state
window.addEventListener('load', function() {
  if (isScrollbarGutterEnabled()) {
    scrollbarToggle.textContent = 'Disable Scrollbar';
  } else {
    scrollbarToggle.textContent = 'Enable Scrollbar';
  }
});

