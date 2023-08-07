//Add classes while scrolling
function addClassByScroll() {
    const scrollPosition = window.scrollY;
    const navbar = document.getElementById('navbar');
    const topNavbar = document.getElementById('top-navbar');
    const bottomNavbar = document.getElementById('bottom-navbar');
    const menuLogo = document.getElementById('menu-logo');
    const menuMobile = document.getElementById('menu-mobile');
    const menuSearth = document.getElementById('menu-searth');
    const mainContent = document.getElementById('main-content');
    const btnScrollTop = document.getElementById('btn-scroll-top');

    const scroll300 = scrollPosition > 300;
    const scroll400 = scrollPosition > 400;

    navbar.classList.toggle('is-fixed', scroll300);
    topNavbar.classList.toggle('is-none', scroll300);
    bottomNavbar.classList.toggle('has-no-border', scroll300);
    menuLogo.classList.toggle('is-small', scroll300);
    menuMobile.classList.toggle('is-top', scroll300);
    menuSearth.classList.toggle('is-top', scroll300);
    mainContent.classList.toggle('is-top', scroll300);
    navbar.classList.toggle('is-visible', scroll400);
    btnScrollTop.classList.toggle('is-visible', scroll400)
}

window.addEventListener('scroll', addClassByScroll);