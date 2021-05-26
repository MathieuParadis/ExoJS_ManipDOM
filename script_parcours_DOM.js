// Question 1 : Combien y a-t-il d'éléments <p> présents dans la page HTML ?
console.log("Question 1 : Combien y a-t-il d'éléments <p> présents dans la page HTML ?");
const q1 = document.getElementsByTagName('p');
console.log(q1.length);

console.log("");

// Question 2 : Quel est le contenu texte de l'élément portant l'id coucou ? 
console.log("Question 2 : Quel est le contenu texte de l'élément portant l'id coucou ?");
const q2 = document.getElementById("coucou");
console.log(q2.textContent);

console.log("");

// Question 3 : Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ? 
console.log("Question 3 : Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ?");
const q3 = document.getElementsByTagName('a')[2].getAttribute("href");
console.log(q3);

console.log("");

// Question 4 : Combien d'éléments portent la classe compte-moi ? 
console.log("Question 4 : Combien d'éléments portent la classe compte-moi ?");
const q4 = document.getElementsByClassName('compte-moi');
console.log(q4.length);

console.log("");

// Question 5 : Combien d'éléments <li> portent la classe compte-moi ?
console.log("Question 5 : Combien d'éléments <li> portent la classe compte-moi ?");
const q5 = document.querySelectorAll('li.compte-moi');
console.log(q5.length);

console.log("");

// Question 6 : Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ?
console.log("Question 6 : Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ?");
const q6 = document.querySelectorAll('ol li.compte-moi');
console.log(q6.length);

console.log("");

// Question 7 
console.log("Question 7 : Contenu 2nd ul li");
const q7 = document.querySelector('div ul').nextElementSibling.children[0];
console.log(q7.textContent);


