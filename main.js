const cells = document.querySelectorAll(".cell");
const restartBtn = document.querySelector(".restart");
const winnerAnnouncement = document.querySelector(".winnerAnnoucement");
const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let playerX = "X"
let playerO = "O"
let isPlayerOTurn = false;
let board = ['','','','','','','','','']

startGame();

function startGame() {
    cells.forEach(cell => cell.addEventListener('click', handleCellClick));
}

function handleCellClick(e) {
    const cellIndex = this.getAttribute("cellIndex")
    const cell = e.target;
    const currentPlayer = isPlayerOTurn ? playerO : playerX;
    markBoard(cell, currentPlayer)
}

function markBoard(cell, currentPlayer) {
    cell.classList.add(currentPlayer);
}

