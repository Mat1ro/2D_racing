let canvas = document.getElementById("field");
let canvasContext = canvas.getContext("2d");

canvas.width = SCREEN.width;
canvas.height = SCREEN.height;


let car = document.createElement("img");
car.src = "images/white_car.png";

car.style.position = "absolute"
car.style.width = "100px"
car.style.height = "100px"
car.style.top = 580 + 'px';
car.style.left = 660 + 'px'
document.body.appendChild(car)

document.onmousemove = function (e) {
    moveAt(e);
}

InitEventsListeners();
play();