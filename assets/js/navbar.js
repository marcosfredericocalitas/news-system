//Dinamic navbar 
function fixedNavbar() {
    const header = document.getElementById('header');
    const brand = document.getElementById('brand');
    const mainContent = document.getElementById('main-content');
    let windowScroll = window.scrollY;

    const scroll300 = windowScroll > 300;
    const scroll400 = windowScroll > 400;

    header.classList.toggle('is-fixed', scroll300);
    brand.classList.toggle('is-small', scroll300);
    mainContent.classList.toggle('is-top', scroll300);
    header.classList.toggle('is-visible', scroll400);
}

window.addEventListener('scroll', fixedNavbar);