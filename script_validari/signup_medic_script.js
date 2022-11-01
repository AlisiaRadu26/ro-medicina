var form_id=document.getElementById("sign_medic");
var nume=document.getElementById("nume");
var cod_medic=document.getElementById("cod_medic");
var prenume=document.getElementById("prenume");
var telefon=document.getElementById("telefon");
var email=document.getElementById("email");
var parola=document.getElementById("parola");
var parolar=document.getElementById("parolar");

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

function isValidNume(nume) {
    var regexp = /^[a-zA-Z_\-]+$/;
    return regexp.test(String(nume));
}

function isValidCodMedic(cod_medic) {
    var regexp = /^[a-z0-9_\-]+$/;
    return regexp.test(String(cod_medic));
}

function isValidEmail(email){
    var re = /^[a-zA-Z0-9_]+@[a-z]+(?:\.[a-z]+)*$/;
    return re.test(String(email).toLowerCase());
}

function isValidTelefon(telefon) {
    var regexp = /^(?=.{14,14}$)[(]*[+]{0,1}[4]{0,1}[0]{0,1}[)]{0,1}[-\s\.\0-9]*$/;
    return regexp.test(String(telefon));
}

function isValidPassword(password) {
    var regexp = /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\!).*$/;
    return regexp.test(String(password));
}

function validateSIGNUP(){
    var numeValue=nume.value.trim();
    var prenumeValue=prenume.value.trim();
    var cod_medicValue=cod_medic.value.trim();
    var telefonValue=telefon.value.trim();
    var emailValue=email.value.trim();
    var passwordValue=parola.value.trim();
    var passwordrValue=parolar.value.trim();

    if(numeValue===''){
        setError(nume, 'Introduceti numele!');
    }else if(!isValidNume(numeValue)){
        setError(nume, 'Introduceti doar litere mici si mari!');
    }else{
        setSuccess(nume);
    }

    if(prenumeValue===''){
        setError(prenume, 'Introduceti numele!');
    }else if(!isValidNume(prenumeValue)){
        setError(prenume, 'Introduceti doar litere mici si mari!');
    }else{
        setSuccess(prenume);
    }

    if (cod_medicValue === '') {
        setError(cod_medic, 'Introduceti codul de medic!');
    } else if(!isValidCodMedic(cod_medicValue)) {
        setError(cod_medic, 'Introduceti doar litere mici si cifre!');
    }else {
        setSuccess(cod_medic);
    }

    if(emailValue===''){
        setError(email, 'Introduceti emailul!');
    }else if(!isValidEmail(emailValue)){
        setError(email, 'Introduceti o adresa de email valida!');
    }else{
        setSuccess(email);
    }

    if(telefonValue===''){
        setError(telefon, 'Introduceti numarul de telefon!');
    }else if(!isValidTelefon(telefonValue)){
        setError(telefon, 'Introduceti un numar de telefon de forma (+40)777777777!');
    }else{
        setSuccess(telefon);
    }

    if(passwordValue.length===0){
        setError(parola, 'Introduceti parola!');
    }else if(!isValidPassword(passwordValue)){
        setError(parola, 'Parola trebuie sa contina minim 8 caractere, litere mari si mici, cifre, !.')
    }else{
        setSuccess(parola);
    }

    if(passwordrValue.length===0){
        setError(parolar, 'Introduceti parola!');
    }else if(!isValidPassword(passwordrValue)){
        setError(parolar, 'Parola trebuie sa contina minim 8 caractere, litere mari si mici, cifre, !.')
    }else{
        setSuccess(parolar);
    }

    if(passwordValue.length >= 8 && passwordrValue.length >=8) {
        if (passwordValue !== passwordrValue) {
            setError(parola, 'Parolele nu coincind');
            setError(parolar, 'Parolele nu coincind');
         } else {
            setSuccess(parola);
            setSuccess(parolar);
        }
    }
}