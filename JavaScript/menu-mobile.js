export default function menuMobile() {
  const menuButton = document.querySelector('.menu-mobile');
  const menuNav = document.querySelector('.header nav');
  const header = document.querySelector('.header');
  const socialHeader = document.querySelector('.social-header');

  function inserirSocialHeader() {
    if (window.innerWidth < 750) {
      menuNav.appendChild(socialHeader);
    } else if (menuNav.contains(socialHeader)) {
      menuNav.removeChild(socialHeader);
      header.appendChild(socialHeader);
      header.insertBefore(menuNav, socialHeader);
    }
  }

  function openMenu() {
    menuNav.classList.toggle('active');
    menuButton.classList.toggle('active');
  }

  menuButton.addEventListener('click', openMenu);
  window.addEventListener('load', inserirSocialHeader);
  window.addEventListener('resize', inserirSocialHeader);
}
