//Faire la somme de deux nombres
const nbr1 = document.querySelector("#nbr1");
const nbr2 = document.querySelector("#nbr2");
let answer = document.querySelector("#answer");

//fonction calcul somme
function somme(){
    answer.value = (parseFloat(nbr1.value) + parseFloat(nbr2.value));
}

nbr1.addEventListener('input', somme);
nbr2.addEventListener('input', somme);