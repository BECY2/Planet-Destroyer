const missile = document.getElementById('missile');
const planet = document.getElementById('planet');

missile.addEventListener('animationstart', () => {
  setTimeout(() => {
    planet.style.opacity = 0; // Change color at 50%
  }, 7000); // Adjust time for halfway point (4 seconds in this case)
});