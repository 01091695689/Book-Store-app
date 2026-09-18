const bookCards = document.querySelectorAll('.book-card-horizontal');

bookCards.forEach(function (card) {
    card.addEventListener('click', function (event) {
        if (!event.target.closest('.btn-pink-action')) {
            window.location.href = './Product details.html';
        }
    });
});
