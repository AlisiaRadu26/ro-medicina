var form_id=document.getElementById("sign_pacient");
var nume=document.getElementById("nume");
var prenume=document.getElementById("prenume");
var telefon=document.getElementById("telefon");
var email=document.getElementById("email");
var parola=document.getElementById("parola");
var parolar=document.getElementById("parolar");

var liveObj =  {
    "Cluj":  ["Dej",
    "Cluj-Napoca",
    "Jucu"],

    "Bistrita": [
    "Bistrita Nasaud",
    "Lechinta"],

    "Brasov": [
    "Brasov",
    "Sacele"
    ]
}

    var selectJudet=document.getElementById("selectJudet");
    var selectOras=document.getElementById("selectOras");
    for(var judet in liveObj){
        selectJudet.options[selectJudet.options.length]=new Option(judet,judet);
    }
    selectJudet.onchange=function(){
        selectOras.length=1; //delete all options bar first
        if(this.selectedIndex<1) return; //done
        var orase=liveObj[this.value];

        for(var i=0;i<orase.length;i++){
            selectOras.options[selectOras.options.length]=new Option(orase[i], orase[i]);
        }
    }

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
    var telefonValue=telefon.value.trim();
    var emailValue=email.value.trim();
    var parolaValue=parola.value.trim();
    var parolarValue=parolar.value.trim();

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

    if(parolaValue.length===0){
        setError(parola, 'Introduceti parola!');
    }else if(!isValidPassword(parolaValue)){
        setError(parola, 'Parola trebuie sa contina minim 8 caractere, litere mari si mici, cifre, !.')
    }else{
        setSuccess(parola);
    }

    if(parolarValue.length===0){
        setError(parolar, 'Introduceti parola!');
    }else if(!isValidPassword(parolarValue)){
        setError(parolar, 'Parola trebuie sa contina minim 8 caractere, litere mari si mici, cifre, !.')
    }else{
        setSuccess(parolar);
    }

    if(parolaValue.length >= 8 && parolarValue.length >=8) {

        if (parolaValue !== parolarValue) {
              setError(parola, 'Parolele nu coincind');
              setError(parolar, 'Parolele nu coincind');
         } else{
              setSuccess(parola);
              setSuccess(parolar);
        }
    }
}