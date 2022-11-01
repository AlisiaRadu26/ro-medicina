var form_id=document.getElementById("programare_pacient");
var nume=document.getElementById("nume");
var prenume=document.getElementById("prenume");
var email=document.getElementById("email");

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

function validateProgramare(){
    var numeValue=nume.value.trim();
    var prenumeValue=prenume.value.trim();
    var emailValue=email.value.trim();

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

}