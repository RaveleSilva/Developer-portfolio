export default function autoType(element) {
  const elemento = document.querySelector(element);
  const tituloFrase = elemento.innerText;
  elemento.innerText = '';
  let count = 0;

  const myInterval = setInterval(() => {
    elemento.innerHTML += tituloFrase.charAt(count);
    count++;

    if (count > tituloFrase.length){
      clearInterval(myInterval);
    }
  }, 75)
}
