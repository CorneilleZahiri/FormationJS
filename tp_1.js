const afficher = document.querySelector("#afficher");
const champNom = document.querySelector("#nom");
const info = document.querySelector("#info");

champNom.addEventListener("input", function () {
  if (champNom.value.length <= 5) {
    info.hidden = true;
    afficher.disabled = true;
  } else {
    afficher.disabled = false;
    info.hidden = false;
}
});
afficher.addEventListener('click', function(){
    let nom = document.querySelector("#nom").value;
    if (nom == ''){
        alert("Saisir le nom")
    }else{
        alert(`Bonjour ${nom}`);
        document.querySelector("#nom").value = '';
        document.querySelector("#nom").focus();
    }
    
});

