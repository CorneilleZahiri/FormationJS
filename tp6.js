let resultat = document.querySelector("#resultat");
//Initailser le résultat à 0
resultat.innerHTML = 0;

const btn_increment = document.querySelector("#incrementer");
const btn_decrement = document.querySelector("#decrementer");

//Incrémenter
btn_increment.addEventListener('click', function(){
    resultat.innerHTML = parseInt(resultat.innerHTML) + 1;
})


//Décrémenter
btn_decrement.addEventListener('click', function(){
    resultat.innerHTML = parseInt(resultat.innerHTML) - 1;
})