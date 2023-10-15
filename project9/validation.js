document.getElementById('validationForm').addEventListener('submit',function (e) {
    e.preventDefault();

    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let password = document.getElementById('password').value;

    // email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert('nieprawidłowy email');
        return;
    }

    // telefon
    const phoneRegex = /^\d{3}\s?\d{3}\s?\d{3}$/;
    if (!phoneRegex.test(phone)) {
        alert('nieprawidłowe telfon');
        return;
    }

    // hasło - 8-20 znaków, (jedna cyfra, jedna wielka litera)- przynajmniej.
    const passwordRegex = /^(?=.*[\d])(?=.*[A-Z]).{8,20}$/;
    if (!passwordRegex.test(password)) {
        alert('nieprawidłowe hasło');
        return;
    }
    
    alert('formularz wysłany');
    
});