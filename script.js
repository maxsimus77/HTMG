// nav
document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scroll');
        } else {
            navbar.classList.remove('navbar-scroll');
        }
    });
});