//Modification n°1
function changeTitles() {
  const m11 = document.querySelector('h1.jumbotron-heading');
  m11.textContent = "Ce que j'ai appris à THP"

  const m12 = document.querySelector('div.container p.lead');
  m12.textContent = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
}

// Modification n°2
function changeCallToActions() {
  const m21 = document.querySelector('section.jumbotron div.container p a');
  m21.textContent = "OK je veux tester !"
  m21.setAttribute("href", "http://www.thehackingproject.org");

  const m23 = document.querySelector('section.jumbotron div.container p a').nextElementSibling;
  m23.textContent = "Non Merci";
  m23.setAttribute("href", "https://www.pole-emploi.fr/accueil/");
}

//Modification n°3
function changeLogoName() {
  const m31 = document.querySelector('div.navbar a strong');
  m31.textContent = "The THP Experience";
  m31.style.fontSize = "2em";
}

// Modification n°4
let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp2RXrE7IxtFHbVYjFKQ1Z-LreGOmTCgfVqA&usqp=CAU", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];

function populateImages() {
  const m4 = document.querySelectorAll('img');

  for (let i = 0; i <=m4.length-1; i++) {
    m4[i].setAttribute("src", imagesArray[i]);
  }
}

// Modification n°5
function deleteLastCards() {
  const m5 = document.querySelectorAll('div.col-md-4');
  for (let i = 0; i <=m5.length-1; i++) {
    if (i >= 6) {
      m5[i].remove();
    }
  }
}

// Modification n°6
function changeCardsText() {
  const m6 = document.querySelectorAll('p.card-text');
  m6[0].textContent = "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web";
  m6[1].textContent = "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML";
  m6[2].textContent = "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype.";
}

// Modification n°7
function changeViewButtons() {
  const m7 = document.querySelectorAll('div.btn-group button');
  for (let i = 0; i <=m7.length-1; i++) {
    if (i%2 == 0) {
      m7[i].classList.add("btn-success");
      m7[i].classList.remove("btn-outline-secondary");
    }
  }
}

// Modification n°8
function pyramide() {
  const m8 = document.createElement("div");
  m8.classList.add("row");
  
  const eltparent = document.querySelector('div.album div.container');
  const cardJS = document.querySelectorAll('div.col-md-4')[2];
  eltparent.appendChild(m8)
  
  m8.appendChild(cardJS);
}



changeTitles();
changeCallToActions();
changeLogoName();
populateImages();
deleteLastCards();
changeCardsText();
changeViewButtons();
pyramide();