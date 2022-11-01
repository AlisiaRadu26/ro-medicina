var form_id = document.getElementById("login_medic");
var email = document.getElementById('email');
var password = document.getElementById('parola');
var cod_medic=document.getElementById('cod_medic');


function setError (element, message)  {
    var inputControl = element.parentElement;
    var errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

function setSuccess (element) {
    var inputControl = element.parentElement;
    var errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

function isValidEmail (email) {
    var re = /^[a-zA-Z0-9_]+@[a-z]+(?:\.[a-z]+)*$/;
    return re.test(String(email).toLowerCase());
}

function isValidPassword(password) {
    var regexp = /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\!).*$/;
    return regexp.test(String(password));
}

function isValidCodMedic(cod_medic) {
    var regexp = /^[a-z0-9_\-]+$/;
    return regexp.test(String(cod_medic));
}

function validateLOGIN() {
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();
    var cod_medicValue=cod_medic.value.trim();

    if(emailValue === '') {
        setError(email, 'Introduceti emailul!');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Introduceti o adresa de email valida!');
    } else {
        setSuccess(email);
    }

    if (cod_medicValue === '') {
        setError(cod_medic, 'Introduceti codul de medic!');
    } else if(!isValidCodMedic(cod_medicValue)) {
        setError(cod_medic, 'Introduceti doar litere mici si cifre!');
    }else {
        setSuccess(cod_medic);
    }

    if(passwordValue === '') {
        setError(password, 'Introduceti parola!');
    } else if (!isValidPassword(passwordValue)) {
        setError(password, 'Parola trebuie sa contina minim 8 caractere, litere mari si mici, cifre, !.')
    } else {
        setSuccess(password);
    }

};
