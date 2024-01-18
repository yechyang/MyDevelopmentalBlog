document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById('myNavbar');

    // Add a class on hover to trigger the transition
    navbar.addEventListener('mouseenter', function () {
        navbar.classList.add('navbar-hover');
    });

    // Remove the class when not hovering
    navbar.addEventListener('mouseleave', function () {
        navbar.classList.remove('navbar-hover');
    });
});