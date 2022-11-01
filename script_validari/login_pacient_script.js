var form_id=document.getElementById("login_pacient");
var email=document.getElementById("email");
var parola=document.getElementById("parola");

function setError(element, message){
    var inputControl=element.parentElement;
    var errorDisplay=inputControl.querySelector('.error');

    errorDisplay.innerText=message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

function setSuccess(element){
    var inputControl=element.parentElement;
    var errorDisplay=inputControl.querySelector('.error');

    errorDisplay.innerText='';
    errorDisplay.classList.add('success');
    errorDisplay.classList.remove('error');
}

function isValidEmail(email){
    var re = /^[a-zA-Z0-9_]+@[a-z]+(?:\.[a-z]+)*$/;
    return re.test(String(email).toLowerCase());
}

function isValidPassword(password) {
    var regexp = /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\!).*$/;
    return regexp.test(String(password));
}

function validateLOGIN(){
    var emailValue=email.value.trim();
    var passwordValue=parola.value.trim();

    if(emailValue===''){
        setError(email, 'Introduceti emailul!');
    }else if(!isValidEmail(emailValue)){
        setError(email, 'Introduceti o adresa de email valida!');
    }else{
        setSuccess(email);
    }

    if(passwordValue===''){
        setError(parola, 'Introduceti parola!');
    }else if(!isValidPassword(passwordValue)){
        setError(parola, 'Parola trebuie sa contina minim 8 caractere, litere mari si mici, cifre, !.')
    }else{
        setSuccess(parola);
    }
}