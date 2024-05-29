var orbitVisibility = false

function SunClick() {
    if (orbitVisibility==false) {
        orbitVisibility=true;
        var elements = document.getElementsByClassName("orbit");
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.add("visible");
        }
    }
    else{
        orbitVisibility=false;
        var elements = document.getElementsByClassName("orbit");
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove("visible");
        }
    }
}

function Change(planet) {
    console.log(planet)
    window.location.replace(`../Planets/plante-destroyer.html?planet=${planet}`);
}