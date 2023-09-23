import menuMobile from "./menu-mobile.js";
import autoType from "./autotype.js";
import animaScroll from "./anima-scroll.js";

menuMobile();
autoType('.home-text h1');
animaScroll();

const submit = document.querySelector('form button')

submit.addEventListener('click', (e) => {
  e.preventDefault();
  window.alert('O GitHub Pages não tem suporte para servidores Node. Em breve estarei hospedando o site em um domínio próprio :)')
})
