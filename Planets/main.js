var url_para = new URLSearchParams(window.location.search)



const missile = document.getElementById('missile');
const laser = document.getElementById('laser');

const planet = document.getElementById('planet');

planet.innerHTML+=`<img src="imgs/${url_para.getAll("planet")}.png" alt="" srcset="">`

function StartAni() {
  missile.innerHTML += `<img src="Imgs/Missile.png" alt="" srcset="" id="miss">`
  const miss = document.getElementById('miss');
  missile.style.opacity = "1";
  missile.style.animationName = "missile-Ani"
  missile.style.animationDuration = "8s"
  var vami = new Audio("Sounds/rocket.mp3");
  vami.play()
  // vami.loop="loop";
  missile.addEventListener('animationstart', () => {
    setTimeout(() => {
      planet.style.opacity = 0;
    }, 6000); 
  });
  var audi = new Audio("Sounds/explosion.mp3")
  
  missile.addEventListener('animationstart', () => {
    setTimeout(() => {
      miss.style.opacity = 0;
      vami.pause(); 
      audi.play();
    }, 4500); //5350
  });

}

function Again(){
  location.reload()
}

function StartAniLaser() {
  laser.style.opacity = 1;
  laser.style.animationName = "lasser-Ani";
  laser.style.animationDuration = "4s"
  var au = new Audio("Sounds/laser.mp3")
  au.play()
  laser.addEventListener('animationstart', () => {
    setTimeout(() => {
      planet.style.opacity = 0;
      
    }, 2500); 
  });
}

function Back(){
  window.location.replace(`../NapRendszerAnimáció/index.html`);
}

// var audi = new Audio("Sounds/explosion.mp3")