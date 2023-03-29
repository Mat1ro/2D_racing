let canvas = document.getElementById("field");
let canvasContext = canvas.getContext("2d");

canvas.width = SCREEN.width;
canvas.height = SCREEN.height;

const audio = new Audio('music_game.m4a');
audio.loop = true;

document.addEventListener('keydown', function () {
audio.play();
});

const losing_audio = new Audio('losing_sound.m4a');


let car = document.createElement("img");
car.src = "images/white_car.png";

car.style.position = "absolute";
car.style.width = "60px";
car.style.height = "120px";
car.style.top = 580 + 'px';
car.style.left = 740 + 'px';
document.body.appendChild(car)


let yellow_lam = document.createElement("img");
yellow_lam.src = "images/yellow_lam.png";

yellow_lam.style.position = "absolute";
yellow_lam.style.width = "50px";
yellow_lam.style.height = "100px";
yellow_lam.style.top = 320 + 'px';
yellow_lam.style.left = 630 + 'px';
document.body.appendChild(yellow_lam)


let blue_car = document.createElement("img");
blue_car.src = "images/blue_car.png";

blue_car.style.position = "absolute";
blue_car.style.width = "55px";
blue_car.style.height = "110px";
blue_car.style.top = 600 + 'px';
blue_car.style.left = 520 + 'px';
document.body.appendChild(blue_car)


let lam = document.createElement("img");
lam.src = "images/lambo.png";


lam.style.position = "absolute";
lam.style.width = "70px";
lam.style.height = "150px";
lam.style.top = 450 + 'px';
lam.style.left = 850 + 'px';
document.body.appendChild(lam)

let blue_cabriolet = document.createElement("img");
blue_cabriolet.src = "images/blue_cabriolet.png";

blue_cabriolet.style.position = "absolute";
blue_cabriolet.style.width = "65px";
blue_cabriolet.style.height = "150px";
blue_cabriolet.style.top = 120 + 'px';
blue_cabriolet.style.left = 740 + 'px';
document.body.appendChild(blue_cabriolet)


InitEventsListeners();
play();