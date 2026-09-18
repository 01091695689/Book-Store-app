async function handleRegister() {

    const userData = {
        email: "mostafa@gmail.com", 
        password: "password",       
        password_confirmation: "password"
    };

   
    const response = await sendRequest('/register', 'POST', userData);

    if (response.success) {
        alert("تم التسجيل بنجاح!");
        console.log(response.data);
    } else {
        alert("فشل التسجيل، تأكدي من البيانات!");
        console.log(response.error);
    }
}