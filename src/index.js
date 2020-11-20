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


