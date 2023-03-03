/*let titrePrincipal  = document.querySelector('#titre')
console.log(titrePrincipal.innerHTML)
console.log(titrePrincipal.innerText)*/

//Ajoutons un nouveau li dans le menu
const menu = document.querySelector('ul')
let newli = document.createElement('li')
newli.innerText = 'Situation matrimoniale'
menu.append(newli)
const doublon = newli
menu.prepend(doublon)