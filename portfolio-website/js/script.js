// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Image slider logic (supports multiple sliders if needed)
document.querySelectorAll('.slider').forEach(slider => {
  const slides = slider.querySelector('.slides');
  const images = slides.querySelectorAll('img');
  const prev = slider.querySelector('.prev');
  const next = slider.querySelector('.next');
  let index = 0;

  function updateSlidePosition() {
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  function showNextSlide() {
    index = (index + 1) % images.length;
    updateSlidePosition();
  }

  function showPrevSlide() {
    index = (index - 1 + images.length) % images.length;
    updateSlidePosition();
  }

  next.addEventListener('click', showNextSlide);
  prev.addEventListener('click', showPrevSlide);

  // Optional: auto-slide every 5 seconds
  setInterval(showNextSlide, 5000);
});
  document.querySelectorAll('.mini-slider').forEach(slider => {
    const slides = slider.querySelector('.mini-slides');
    const total = slides.children.length;
    let index = 0;

    setInterval(() => {
      index = (index + 1) % total;
      slides.style.transform = `translateX(-${index * 100}%)`;
    }, 3000); // Image changes every 3 seconds
  });
