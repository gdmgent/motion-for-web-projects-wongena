let arrow = document.querySelector('.arrow');

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    if (scrollPosition < 500) {
        arrow.style.opacity = '1';
    } else {
        arrow.style.opacity = '0';
    }
});