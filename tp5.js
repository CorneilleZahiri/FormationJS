//les variables
let choix = document.querySelector("#choix");

const nbr1 = document.querySelector("#nbr1");
const nbr2 = document.querySelector("#nbr2");
let answer = document.querySelector("#answer");

//fonction calcul
function somme(){
    answer.value = (parseFloat(nbr1.value) + parseFloat(nbr2.value));
}

function soustration(){
    answer.value = (parseFloat(nbr1.value) - parseFloat(nbr2.value));
}

function multiplication(){
    answer.value = (parseFloat(nbr1.value) * parseFloat(nbr2.value));
}

function division(){
    if (parseFloat(nbr2.value) != 0){
        answer.value = (parseFloat(nbr1.value) / parseFloat(nbr2.value));
    }
}

//Tout calcul
function tout_calcul(){
    switch (choix.value) {
        case "vide":
            //nbr1.value = 0;
            //nbr2.value = 0;
            answer.value = '';
            break;

        case "add":
            somme()
            break;  
        
        case "sub":
            soustration()
            break;    

        case "mul":
            multiplication()
            break;

        default:
            division()
            break;
    }
}

nbr1.addEventListener('input', function(){
    tout_calcul();
}) 

nbr2.addEventListener('input', function(){
    tout_calcul();
})

choix.addEventListener('change', function(){
    tout_calcul();
})