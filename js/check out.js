document.addEventListener("DOMContentLoaded", function () {
    const successModalElement = document.getElementById('successModal');
    const confirmOrderBtn = document.querySelector('.col-lg-5 button.w-100'); 
    const keepShoppingBtn = document.getElementById('keepShoppingBtn');

    if (successModalElement) {
        const successModal = new bootstrap.Modal(successModalElement);

        if (confirmOrderBtn) {
            confirmOrderBtn.addEventListener('click', function (e) {
                e.preventDefault();
                successModal.show();
            });
        }

        if (keepShoppingBtn) {
            keepShoppingBtn.addEventListener('click', function () {
                successModal.hide();
                window.location.href = '/books.html'; 
            });
        }
    }
});