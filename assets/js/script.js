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

const headerActive = function () {
  if (window.scrollY > 80) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);





//----------------------------------------------------------------//
var contar = 1;
var indice = 0; // Global para manter sincronizado
const radioButtons = document.querySelectorAll('input[name="radio-btn"]');

// Definindo o primeiro radio como ativo
window.document.getElementById("radio1").checked = true;

// Função para avançar para a próxima imagem automaticamente a cada 10 segundos
setInterval(() => {
  ProximaImagem();
}, 10000);

// Função para avançar para a próxima imagem automaticamente
function ProximaImagem() {
  contar++;
  if (contar > radioButtons.length) {
    contar = 1;
  }
  window.document.getElementById("radio" + contar).checked = true;
  indice = contar - 1; // Atualiza o índice manual
}

//------------------------------Setinhas-----------------------------//

document.addEventListener('DOMContentLoaded', function () {
  const Esquerda = document.getElementById("esquerda");
  const Direita = document.getElementById("direita");

  Esquerda.addEventListener("click", clicarEsquerda);
  Direita.addEventListener("click", clicarDireita);

  // Função ao clicar na seta direita (avançar)
  function clicarDireita() {
    indice++;
    if (indice >= radioButtons.length) {
      indice = 0; // Volta ao primeiro slide
    }
    radioButtons[indice].checked = true;
    contar = indice + 1; // Sincroniza o contador automático
  }

  // Função ao clicar na seta esquerda (voltar)
  function clicarEsquerda() {
    indice--;
    if (indice < 0) {
      indice = radioButtons.length - 1; // Volta ao último slide
    }
    radioButtons[indice].checked = true;
    contar = indice + 1; // Sincroniza o contador automático
  }
});
