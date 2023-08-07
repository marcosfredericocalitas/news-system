//Add classes by scroll 
function addClassByScroll() {
    const header = document.getElementById('header');
    const topNavbar = document.getElementById('top-navbar');
    const bottomNvabar = document.getElementById('bottom-navbar');
    const menuLogo = document.getElementById('menu-logo');
    const menuMobile = document.getElementById('menu-mobile');
    const menuSearth = document.getElementById('menu-searth');
    const mainContent = document.getElementById('main-content');
    const scrolTopBtn = document.getElementById('scrol-top-btn');
    let windowScroll = window.scrollY;

    const scroll300 = windowScroll > 300;
    const scroll400 = windowScroll > 400;

    header.classList.toggle('is-fixed', scroll300);
    topNavbar.classList.toggle('is-none', scroll300);
    bottomNvabar.classList.toggle('has-no-border', scroll300);
    menuLogo.classList.toggle('is-small', scroll300);
    menuMobile.classList.toggle('is-top', scroll300);
    menuSearth.classList.toggle('is-top', scroll300);
    mainContent.classList.toggle('is-top', scroll300);
    header.classList.toggle('is-visible', scroll400);
    scrolTopBtn.classList.toggle('is-visible', scroll400)
}

window.addEventListener('scroll', addClassByScroll);