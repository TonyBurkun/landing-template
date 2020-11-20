require('./styles/style.scss');
require('./assets/img/first_section_img.jpg');
// require('./styles/variables.scss');



let utils = require('./utils/random-function');

let subscribeForm = document.getElementById('subscribe-form');

subscribeForm.onsubmit = (event) => {
    event.preventDefault();
    subscribeForm.reset();
    alert('Subscription form was send')
};



document.addEventListener('scroll', () => {
    const scrollActionHeight = 300;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let header = document.getElementsByTagName('header')[0];

    if (scrollTop >= scrollActionHeight && !header.classList.contains('scrolled')) {
        header.classList.add('scrolled');
    }

    if (scrollTop < scrollActionHeight && header.classList.contains('scrolled')) {
        header.classList.remove('scrolled')
    }
});

document.addEventListener("DOMContentLoaded", () => {
    activateMobileHeader();
});


window.addEventListener('resize', () => {
    activateMobileHeader();
});

let menuBtn = document.getElementById('menu-btn');
console.log(menuBtn);

menuBtn.addEventListener('click', () => {
    let menu = document.getElementsByClassName('mobile-header__list')[0];
    menu.classList.toggle('open')
});




function activateMobileHeader(){
    let browserWidth = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

    let header = document.getElementsByTagName('header')[0];


    if (browserWidth <= 768 && !header.classList.contains('mobile-header-active')) {
        header.classList.add('mobile-header-active');
    }

    if (browserWidth > 768 && header.classList.contains('mobile-header-active')) {
        header.classList.remove('mobile-header-active');

        let menu = document.getElementsByClassName('mobile-header__list')[0];
        menu.classList.remove('open');
    }

}


