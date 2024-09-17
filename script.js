let score = 0;
let activeMole = null;
let gameInterval = null;

function whackMole(index) {
    if (index === activeMole) {
        score++;
        document.getElementById("score").innerText = "Score: " + score;
        removeMole();
        activeMole = null;
    }
}

function startGame() {
    score = 0;
    document.getElementById("score").innerText = "Score: 0";
    document.querySelector(".start").disabled = true;

    gameInterval = setInterval(() => {
        if (activeMole !== null) {
            removeMole();
        }

        activeMole = Math.floor(Math.random() * 9);
        const moleElement = document.createElement("div");
        moleElement.classList.add("mole");
        document.getElementById(`hole${activeMole}`).appendChild(moleElement);
    }, 1000);  // Change mole every second

    setTimeout(endGame, 30000);  // Game ends after 30 seconds
}

function endGame() {
    clearInterval(gameInterval);
    document.querySelector(".start").disabled = false;
    if (activeMole !== null) {
        removeMole();
    }
    activeMole = null;
    alert("Game over! Your score is " + score);
}

function removeMole() {
    const mole = document.querySelector(".mole");
    if (mole) {
        mole.remove();
    }
}
