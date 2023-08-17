const arrow = document.querySelector('#setinhaRoll')
const arrowImg = document.querySelector('#setaBaixo')
const header = document.querySelector('#fundoNav')

let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos < currentScrollPos || prevScrollPos > currentScrollPos ) {
    arrow.style.display = 'flex';
    arrow.style.top = '0';
  } else {
    header.classList.add('hidden');
  }

  prevScrollPos = currentScrollPos;
});

arrowImg.addEventListener('click', () => {
  header.style.position = 'fixed'
  header.style.top = '0';
  arrow.style.position = 'relative';
});

if (currentScrollPos === 0) {
    arrow.style.display = 'none';
    arrow.style.top = '0'; 
}






