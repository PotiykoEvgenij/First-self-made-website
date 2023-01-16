(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 176) {
            header.classList.add('header-active');
        } else {
            header.classList.remove('header-active');
        }
    };
}());

// Burger handler

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const menuCloseItem = document.querySelector('.header-nav-close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header_nav-active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header_nav-active');
    });
}());