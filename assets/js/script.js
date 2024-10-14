'use strict';


const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}


const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);


const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

// Função que ativa ou desativa as classes com base na rolagem
const headerActive = function () {
  if (window.scrollY > 80) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

// Adiciona o evento de rolagem para ativar a função acima
window.addEventListener("scroll", headerActive)

const btnDark = document.querySelector("[Drak-white-Mode]");

// Função que ativa ou desativa as classes com base na rolagem
const headerActiveDark = function () {
  if (window.scrollY > 80) {
    header.classList.add("active");
    btnDark.classList.add("active");
  } else {
    header.classList.remove("active");
    btnDark.classList.remove("active");
  }
}

// Adiciona o evento de rolagem para ativar a função acima
window.addEventListener("scroll", headerActiveDark)





//----------------------------------------------------------------//
var contar = 1;
var indice = 0; 
const radioButtons = document.querySelectorAll('input[name="radio-btn"]');


window.document.getElementById("radio1").checked = true;


setInterval(() => {
  ProximaImagem();
}, 10000);

function ProximaImagem() {
  contar++;
  if (contar > radioButtons.length) {
    contar = 1;
  }
  window.document.getElementById("radio" + contar).checked = true;
  indice = contar - 1; 
}

//------------------------------Setinhas-----------------------------//

document.addEventListener('DOMContentLoaded', function () {
  const Direita = document.getElementById("esquerda");
  const Esquerda = document.getElementById("direita");
  const radioButtons = document.querySelectorAll('input[type="radio"]'); // Seleciona os botões de rádio
  let indice = 0; // Inicializa o índice

  Esquerda.addEventListener("click", clicarEsquerda);
  Direita.addEventListener("click", clicarDireita);

  function clicarDireita() {
    indice++;
    if (indice >= radioButtons.length) {
      indice = 0; 
    }
    radioButtons[indice].checked = true;
    contar = indice + 1; // Atualiza o contador, se necessário
  }

  function clicarEsquerda() {
    indice--;
    if (indice < 0) {
      indice = radioButtons.length - 1; 
    }
    radioButtons[indice].checked = true;
    contar = indice + 1; // Atualiza o contador, se necessário
  }
});

//-----------------------Dark & White Mode--------------------//
//-----------------------Dark & White Mode--------------------//
//-----------------------Dark & White Mode--------------------//
//-----------------------Dark & White Mode--------------------//

const darkIcon = document.getElementById("dark-icon"); // Sasuke
const lightIcon = document.getElementById("light-icon"); // Naruto

let darkmode = localStorage.getItem("dark-mode") === "true" || window.matchMedia("(prefers-color-scheme: dark)").matches;

if (darkmode) {
  document.body.classList.add("dark-mode");
  lightIcon.style.display = "none";
  darkIcon.style.display = "block";
} else {
  lightIcon.style.display = "block";
  darkIcon.style.display = "none";
}

function toggleDarkMode() {
  darkmode = !darkmode; 
  localStorage.setItem("dark-mode", darkmode); 
  document.body.classList.toggle("dark-mode");

  if (darkmode) {
    lightIcon.style.display = "none";
    darkIcon.style.display = "block";
  } else {
    lightIcon.style.display = "block";
    darkIcon.style.display = "none";
  }
}

