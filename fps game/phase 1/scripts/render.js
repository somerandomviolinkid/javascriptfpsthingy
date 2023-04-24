function verticalLine(x, y0, y1, color) {

}

function rayCast(x) {
    let rayDirection = (playerDirection - (fov / 2)) + ((x * fov) / screenWidth);

    let lineHeight = screenHeight / rayDist;
    return lineHeight;
}

function frame() {
    for (let x = 0; x <= screenWidth; x++) {
        verticalLine(x, 0);
        verticalLine(x, rayCast(x), );
        verticalLine(x, (screenHeight - rayCast(x)) / 2);
    }
}