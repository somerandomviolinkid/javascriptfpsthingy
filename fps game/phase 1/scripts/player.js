let playerPos = {x:1 ,y:1};
let playerDirection = 0;

window.addEventListener(
    "keydown",
    (event) => {
        if (event.defaultPrevented) {
            return; // Do nothing if event already handled
        }

        let playerSin = Math.sin(playerDirection);
        let playerCos = Math.cos(playerDirection);

        switch (event.code) {
            case "KeyW":
            case "ArrowUp":
                playerPos.x += playerSpeed * playerCos;
                playerPos.y += playerSpeed * playerSin;
                break;
            case "KeyS":
            case "ArrowDown":
                playerPos.x -= playerSpeed * playerCos;
                playerPos.y -= playerSpeed * playerSin;
                break;
            case "KeyA":
            case "ArrowLeft":
                playerPos.x += playerSpeed * playerSin;
                playerPos.y -= playerSpeed * playerCos;
                break;
            case "KeyD":
            case "ArrowRight":
                playerPos.x -= playerSpeed * playerSin;
                playerPos.y += playerSpeed * playerCos;
                break;
            }

        if (event.code !== "Tab") {
            // Consume the event so it doesn't get handled twice,
            // as long as the user isn't trying to move focus away
            event.preventDefault();
        }
    },
    true
);