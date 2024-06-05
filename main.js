const hamburgerMenu = document.querySelector('#hamburger-menu');
const navbar = document.querySelector('#navbar');
const closeBtn = document.querySelector('#close-btn');
const featuresBtn = document.querySelector('#features-btn');
const companyBtn = document.querySelector('#company-btn')
const featuresUl = document.querySelector('#features-ul');
const companyUl = document.querySelector('#company-ul');

hamburgerMenu.addEventListener('click', () => {
    navbar.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    const screenSize = window.innerWidth;
    if(screenSize >= 768) {
        navbar.style.display = 'block';
    } else {
        navbar.style.display = 'none';
    }
})

featuresBtn.addEventListener('click', () => {
    featuresUl.style.display = (featuresUl.style.display === 'block') ?'none' : 'block';
})

companyBtn.addEventListener('click', ()=> {
    companyUl.style.display = (companyUl.style.display === 'block') ?'none' : 'block';
})