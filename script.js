let score = 0;
let activeMole = null;
let gameInterval = null;

function whackMole(index) {
    if (index === activeMole) {
        score++;
        document.getElementById("score").innerText = "Score: " + score;
        activeMole = null;
        document.querySelector(".mole").remove();
    }
}

function startGame() {
    score = 0;
    document.getElementById("score").innerText = "Score: 0";
    document.querySelector(".start").disabled = true;

    gameInterval = setInterval(() => {
        if (activeMole !== null) {
            document.querySelector(".mole").remove();
        }

        activeMole = Math.floor(Math.random() * 9);
        const moleElement = document.createElement("div");
        moleElement.classList.add("mole");
        document.getElementById(`hole${activeMole}`).appendChild(moleElement);
    }, 1000);

    setTimeout(endGame, 30000);
}

function endGame() {
    clearInterval(gameInterval);
    document.querySelector(".start").disabled = false;
    if (activeMole !== null) {
        document.querySelector(".mole").remove();
    }
    activeMole = null;
    alert("Game over! Your score is " + score);
}
