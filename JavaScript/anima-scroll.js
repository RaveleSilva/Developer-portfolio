export default function animaScroll() {
  const sections = document.querySelectorAll('[data-anima="scroll"');
  console.log(sections.length)
  const windowHalfHeight = window.screen.height / 2;

  function animaSection() {
    sections.forEach(section => {
      const topDistance = section.getBoundingClientRect().top;
      
      if (topDistance < windowHalfHeight) {
        section.classList.add('visible');
      }
    })

    if (sections[sections.length - 1].classList.contains('visible')){
      window.removeEventListener('scroll', animaSection)
    }
  }

  window.addEventListener('scroll', animaSection);
  window.addEventListener('load', animaSection);

}
