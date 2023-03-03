/* Ce TP consiste à afficher au survol des li, les textes contenus dans le data-info*/
//1- Sélectionner les li
const all_li = document.querySelectorAll('li');
//2- Récuper la zone de résultat
let resultat = document.querySelector("#datainfo");

//Fonction au survol
//pacourir les li
for (let li of all_li){
    //Survol
    li.addEventListener('mouseover', function(){
        resultat.hidden = false;
        resultat.innerHTML = li.dataset.info;
        //Changer les types d'alerte
        if (li.classList.contains('blocker')){
            resultat.classList.remove('alert-primary')
            resultat.classList.add('alert-danger')
        }else{
            if (resultat.classList.contains("alert-danger")){
                resultat.classList.add('alert-primary')
                resultat.classList.remove('alert-danger')
            }
        }
    })
    //en quittant le survol
    li.addEventListener('mouseout', function(){
        resultat.hidden = true;
    })
}