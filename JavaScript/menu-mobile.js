export default function menuMobile() {
  const menuButton = document.querySelector('.menu-mobile');
  const menuNav = document.querySelector('.header nav');

  function openMenu() {
    menuNav.classList.toggle('active');
    menuButton.classList.toggle('active');
  }

  menuButton.addEventListener('click', openMenu);
}

