// Add class 
function addClass(element1, element2, className) {
    let btn = document.getElementById(element1);
    let content = document.getElementById(element2);

    btn.addEventListener('click', () => {
        content.classList.toggle(className);
    });
}

addClass('btn-mobile', 'menu-mobile', 'is-open');
addClass('btn-mobile', 'menu-searth', 'is-active');
addClass('btn-mobile', 'top-navbar', 'is-active');