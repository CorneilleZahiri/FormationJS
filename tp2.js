let world = [
    {"name":"Africa", "pays": ["Benin","Togo","Nigeria","Chad"]},
    {"name":"Europa", "pays": ["France","Russie","Italia","England"]},
    {"name":"Asia", "pays": ["Japon","Chine","South Korea","Inde"]}
]

const conti_pays = document.querySelector("#conti_pays");
const pays = document.querySelector("ul");

//Créer les options (les continents) dans le select du html
for (let continent of world) {
    let option = document.createElement('option');
    option.value = continent.name;
    option.innerText = continent.name;
    conti_pays.append(option);
}

//fONCTION chargement
function chargement(){
    for (let continent of world) {
        if (continent.name === conti_pays.value){
             //Supprimer les li si existant
             while (pays.firstChild){
                 pays.removeChild(pays.firstChild);
             }
 
             //Créer de nouveau les li
             for (let un_pays of continent.pays){
                 let li = document.createElement('li');
                 li.innerText = un_pays;
                 pays.appendChild(li);
             }
        }
     } 
}

//Au chargement de la page HTML
chargement();

//sélection d'un continent
conti_pays.addEventListener('change', chargement);