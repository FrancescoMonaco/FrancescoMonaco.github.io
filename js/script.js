// Function for parallax scrolling
window.addEventListener('scroll', function() {
  const parallaxImage = document.querySelector('.parallax-image');
  const scrollPosition = window.scrollY;

  const parallaxSpeed = -1.5; // Movement speed
  const imageMovement = scrollPosition * parallaxSpeed;
  
  if (parallaxImage) {
    parallaxImage.style.transform = `translate3d(0, ${imageMovement}px, 0)`;
  }
});
