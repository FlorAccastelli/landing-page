const hamburgerMenu = document.querySelector('#hamburger-menu');
const navbar = document.querySelector('#navbar')
const closeBtn = document.querySelector('#close-btn')

hamburgerMenu.addEventListener('click', () => {
    navbar.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    navbar.style.display = 'none';
})