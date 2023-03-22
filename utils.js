function drawFrame() {
    canvasContext.fillStyle = SCREEN.grass_color;
    canvasContext.fillRect(0, 0, SCREEN.widthGrass, SCREEN.height);

    canvasContext.fillStyle = SCREEN.border;
    canvasContext.fillRect(474, 0, SCREEN.widthBorder, SCREEN.height);

    canvasContext.fillStyle = SCREEN.way_color;
    canvasContext.fillRect(489, 0, 459, SCREEN.height);

    canvasContext.fillStyle = SCREEN.border;
    canvasContext.fillRect(933, 0, SCREEN.widthBorder, SCREEN.height);

    canvasContext.fillStyle = SCREEN.grass_color;
    canvasContext.fillRect(948, 0, SCREEN.widthGrass, SCREEN.height);

    canvasContext.fillStyle = "#ffffff";
    canvasContext.fillRect(700, 0, 10, SCREEN.height);
}

function drawMarkup() {
    canvasContext.fillRect(585, MARKUP1.y, MARKUP1.width, MARKUP1.height);
    canvasContext.fillRect(815, MARKUP1.y, MARKUP1.width, MARKUP1.height);

    canvasContext.fillRect(585, MARKUP2.y, MARKUP2.width, MARKUP2.height);
    canvasContext.fillRect(815, MARKUP2.y, MARKUP2.width, MARKUP2.height);

    canvasContext.fillRect(585, MARKUP3.y, MARKUP3.width, MARKUP3.height);
    canvasContext.fillRect(815, MARKUP3.y, MARKUP3.width, MARKUP3.height);

    canvasContext.fillRect(585, MARKUP4.y, MARKUP4.width, MARKUP4.height);
    canvasContext.fillRect(815, MARKUP4.y, MARKUP4.width, MARKUP4.height);

    canvasContext.fillRect(585, MARKUP5.y, MARKUP5.width, MARKUP5.height);
    canvasContext.fillRect(815, MARKUP5.y, MARKUP5.width, MARKUP5.height);
}

function updateScreen() {
    if (MARKUP1.y > 804) {
        MARKUP1.y = -60;
    }
    if (MARKUP2.y > 804) {
        MARKUP2.y = -60;
    }
    if (MARKUP3.y > 804) {
        MARKUP3.y = -60;
    }
    if (MARKUP4.y > 804) {
        MARKUP4.y = -60;
    }
    if (MARKUP5.y > 804) {
        MARKUP5.y = -60;
    }
    MARKUP1.y += MARKUP1.yDirection;
    MARKUP2.y += MARKUP2.yDirection;
    MARKUP3.y += MARKUP3.yDirection;
    MARKUP4.y += MARKUP4.yDirection;
    MARKUP5.y += MARKUP5.yDirection;
}

function InitEventsListeners() {
    window.addEventListener("mousemove", moveAt);
    window.addEventListener("keydown", keyAt);
}

function moveAt(event) {
    car.style.left = event.clientX - car.offsetWidth / 2 + 'px';
    clampCarPosition();
}

function clampCarPosition() {
    if (car.x < 938) {
        car.style.left = 469 + 'px';
    }
    if (car.x + car.offsetWidth > 1838) {
        car.style.left = 870 + 'px';
    }
}

function keyAt(event) {
    console.log(car.style.left)
    if (event.key === "ArrowLeft") {
        car.style.left -= 4 + 'px';
    }
    if (event.key === "ArrowRight") {
        car.style.left += 4 + 'px';
    }
    clampCarPosition();
}

function play() {
    drawFrame();
    drawMarkup();
    updateScreen();
    requestAnimationFrame(play);
}
