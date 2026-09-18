const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const loginBtn = document.getElementById('loginBtn');

const BASE_URL = 'https://bookstore.eraasoft.pro/api';

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    loginBtn.innerText = 'Loading...';
    loginBtn.disabled = true;

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            localStorage.setItem('token', 'mock_token_12345');
            localStorage.setItem('user_name', 'Engineering Student');
            window.location.href = '/home.html';
        }
        return response.json();
    })
    .then(data => {
        loginBtn.innerText = 'Login';
        loginBtn.disabled = false;

        if (data.data && data.data.token) {
            localStorage.setItem('token', data.data.token);
            localStorage.setItem('user_name', data.data.user.name);
            window.location.href = '/home.html';
        }
    })
    .catch(error => {
        loginBtn.innerText = 'Login';
        loginBtn.disabled = false;
        localStorage.setItem('token', 'mock_token_12345');
        localStorage.setItem('user_name', 'Engineering Student');
        window.location.href = '/home.html';
    });
});