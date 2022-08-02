const slides = document.querySelectorAll('.slide')

let rand = Math.floor(Math.random() * slides.length);
slides[rand].classList.add('active')

slides.forEach((slide) => {
  slide.addEventListener('click', () => {
    clearActiveClasses()

    slide.classList.add('active')
  });
})

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('active')
  });
}