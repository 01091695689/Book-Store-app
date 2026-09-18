const checkoutBtn = document.getElementById('checkout-btn');
const keepShoppingBtn = document.getElementById('keep-shopping-btn');

if (checkoutBtn) {
    checkoutBtn.addEventListener('click', function() {
        window.location.href = 'check out.html'; 
    });
}

if (keepShoppingBtn) {
    keepShoppingBtn.addEventListener('click', function() {
        window.location.href = 'books.html'; 
    });
}