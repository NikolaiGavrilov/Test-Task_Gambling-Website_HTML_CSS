document.addEventListener('DOMContentLoaded', () => {
    const burgerButton = document.querySelector('.header-mobile__burger-button');
    const mobileMenu = document.querySelector('.header-mobile__menu');

    burgerButton.addEventListener('click', () => {

        mobileMenu.classList.toggle('active');

        if (mobileMenu.classList.contains('active')) {
            burgerButton.src = 'img/Vector.svg';
            burgerButton.style.scale = '110%';
            burgerButton.style.paddingRight = '10px';
            burgerButton.style.paddingLeft = '8px';
        } else {
            burgerButton.src = 'img/ic_round-menu.svg';
            burgerButton.style.scale = '100%';
            burgerButton.style.paddingRight = '4px';
            burgerButton.style.paddingLeft = '4px';
        }
    });
});