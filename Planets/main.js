const missile = document.getElementById('missile');

const planet = document.getElementById('planet');



function StartAni() {
  missile.innerHTML += `<img src="Imgs/Missile.png" alt="" srcset="" id="miss">`
  const miss = document.getElementById('miss');
  missile.style.opacity = "1";
  missile.style.animationName = "missile-Ani"
  missile.style.animationDuration = "8s"
  missile.addEventListener('animationstart', () => {
    setTimeout(() => {
      planet.style.opacity = 0;
    }, 6000); 
  });
  
  missile.addEventListener('animationstart', () => {
    setTimeout(() => {
      miss.style.opacity = 0; 
    }, 4500); //5350
  });

}

function Again(){
  location.reload()
}