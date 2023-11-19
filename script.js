// nav
document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scroll');
        } else {
            navbar.classList.remove('navbar-scroll');
        }

        if (window.scrollY > 1000) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });
});

function scrollToElement(elementId) {
    var element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: 'smooth' });
}

// Cuộn lên đầu trang khi nhấp vào nút cuộn
function scrollToTop() {
    var boxSelection = document.querySelector('.box-selection');
    boxSelection.scrollIntoView({ behavior: 'smooth' });
}