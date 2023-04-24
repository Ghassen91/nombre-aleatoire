var text = document.querySelector('h3');
var result = document.querySelector('.resultat');
var inputPlayer = document.getElementById('input-player');
var btn1 = document.getElementById('btn-valid');
var btn2 = document.getElementById('btn-refresh');
var randomNumber = getRandomNumber();
var valeurSaisie = null;
var min = 0;
var max = 100;
console.log(randomNumber);

function getRandomNumber(){
    return Math.floor(Math.random() * 101);
}


//On met un évènement sur le bouton de validation
btn1.addEventListener('click', function(){
    var valeurSaisie =+ inputPlayer.value;
    if (valeurSaisie > 100 || isNaN(valeurSaisie) || valeurSaisie == ""){
        result.textContent = "Valeur saisie invalide";
        result.style.color = 'red';
        inputPlayer.value = "";
    }else if (valeurSaisie == randomNumber){
        result.textContent = "Gagné !";
        result.style.color = "green";
    }else if (valeurSaisie < randomNumber){
        min = valeurSaisie
        result.textContent = 'Essaie encore...';
        result.style.color = 'red';
        inputPlayer.value = "";
        text.textContent = "Veuillez saisir un nombre entre " + min + " et " + max;
    }else if (valeurSaisie > randomNumber) {
        max = valeurSaisie
        result.textContent = 'Essaie encore...';
        result.style.color = 'red';
        inputPlayer.value = "";
        text.textContent = "Veuillez saisir un nombre entre " + min + " et " + max;
    }
})

btn2.addEventListener('click', function(){
    // location.reload();
    randomNumber = getRandomNumber();
    console.log(randomNumber)
    min = 0;
    max = 100;
    result.textContent = "";
    inputPlayer.value = "";
    text.textContent = "Veuillez saisir un nombre entre " + min + " et " + max;
})