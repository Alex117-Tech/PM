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
var contar=1;
window.document.getElementById("radio1").checked = true;

setInterval(() => {
  ProximaImagem();
}, 10000);

function ProximaImagem(params) {
  contar++;
  if (contar>=4) {
    contar=1;
  }
  window.document.getElementById("radio" + contar).checked = true;
}


//------------------------------Setinhas-----------------------------//

document.addEventListener('DOMContentLoaded', function () {
  const radioButtons = document.querySelectorAll('input[name="radio-btn"]');
  const Esquerda = document.getElementById("esquerda");
  const Direita = document.getElementById("direita");
  Esquerda.addEventListener("click", clicar2);
  Direita.addEventListener("click", clicar);
  let indice = 0;


  function clicar() {
    if (indice > 0) {
      indice--;
    } else {
      indice = radioButtons.length - 1; 
    }
    radioButtons[indice].checked = true;
  }

  function clicar2() {
    if (indice < radioButtons.length - 1) {
      indice++;
    } else {
      indice = 0; 
    }
    radioButtons[indice].checked = true;
  }
});

