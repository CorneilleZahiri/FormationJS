class Eleves{
    constructor(ecole, classe, nom){
        this.ecole = ecole;
        this.classe = classe;
        this.nom = nom;
    }
};

const Corneille = new Eleves("ENEAM", "LP/IG", "GBEAGA");
console.log(Corneille.ecole);
let names = Corneille['nom'];
console.log(names);