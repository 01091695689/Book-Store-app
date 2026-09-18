const checkoutBtn = document.getElementById('checkout-wishlist-btn');

if (checkoutBtn) {
    checkoutBtn.addEventListener('click', function() {
        window.location.href = 'check out.html';
    });
}