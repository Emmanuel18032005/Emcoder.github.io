
    var nbre = Math.floor(Math.random()*100)+1;
    console.log(nbre);
    do{
        var nom_du_joueur = prompt("Entrer votre nom: ", "Nom du joueur");
    }
    while(nom_du_joueur==" ");
    var nom = document.getElementById("nom");
    nom.innerHTML =  nom_du_joueur;

    var presentation = document.querySelector(".presentation")
    let boutton_commencer = document.querySelector(".boutton_commencer");
    var block_indice = document.querySelector(".block_indice");
    var valider = document.querySelector(".valider")

    boutton_commencer.addEventListener('click', function(){

        presentation.style.visibility="hidden";
        nom.style.visibility="visible";
        block_indice.style.visibility="visible";

        

});
    

var essayer = document.getElementById("essayer");
var nombre;
essayer.addEventListener("click", function(){
    
    nombre = prompt("Entrer un nombre");
        if(nombre>100 || nombre<0){
        resultat.innerHTML = "Entrer un nombre compris entre 0 et 100 !";
        }
        else if(nombre>nbre){
            resultat.innerHTML = "Le nombre que vous avez saisi est Grand !";
        }
        else if(nombre<nbre){
            resultat.innerHTML = "Le nombre que vous avez saisi est Petit !";
        }
        else if(nombre==nbre){
            resultat.innerHTML = "Bravo le nombre recherché était bel et bien " + nbre + " !";
            var essayer = document.getElementById("essayer");
            essayer.style.visibility="hidden"
            var signature = document.querySelector(".signature")
            signature.style.visibility="visible"
        }
        else{
            resultat.innerHTML = "Veillez entrer un nombre !";
        }
})
var btn = document.getElementById("btn");
btn.addEventListener('click', function(){
    location.reload();
})