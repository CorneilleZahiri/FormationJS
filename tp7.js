const nom = document.querySelector('#nom')
const majuscule = document.querySelector('#majuscule');

//Fonction pour toujours mettre en minuscule les données lors de la saisie
nom.addEventListener('input', () => {
    nom.value = nom.value.toLowerCase();
})

//Convertir en majucule à la sortie du champ
/*majuscule.addEventListener('click', () => {
    nom.value = nom.value.toUpperCase();
})
*/
//Convertir en majucule à la sortie du champ
nom.addEventListener('blur', () => {
    nom.value = nom.value.toUpperCase();
})