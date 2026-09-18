document.addEventListener("DOMContentLoaded", function() {
    const wishlistSelectors = [
        '.heart-outline',
        '.btn-heart-outline',
        '.fa-heart'
    ];

    wishlistSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            element.style.cursor = 'pointer';
            element.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = 'wishlist.html';
            });
        });
    });
});