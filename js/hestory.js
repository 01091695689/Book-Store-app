document.addEventListener("DOMContentLoaded", function() {
    
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.filter-btn');

    navLinks.forEach(link => {

        if(currentLocation.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});