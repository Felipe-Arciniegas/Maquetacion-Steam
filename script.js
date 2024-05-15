let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.querySelectorAll('.carousel-images img');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';  
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  
  slides[slideIndex - 1].style.display = 'block';  

  setTimeout(showSlides, 9000); // Cambia la imagen cada 2 segundos

  prevButton.addEventListener('click', () => {
    slideIndex -= 1;
    if (slideIndex < 1) {
      slideIndex = slides.length;
    }
    showSlides();
  });

  nextButton.addEventListener('click', () => {
    slideIndex += 1;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    showSlides();
  });
}