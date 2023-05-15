const cells = document.querySelectorAll(".cell");
const restartBtn = document.querySelector(".restart");
const message = document.querySelector(".message");
const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let playerX = "X";
let playerO = "O";
let isPlayerOTurn = false;
let board = ['','','','','','','','',''];
let gameRunning = true;
let turn;

//switch players
function switchPlayer() {
    if (gameRunning) {
        isPlayerOTurn ? playerX : playerO;
    }
}
//append X's and O's to board
function appendChoice() {
    cells.forEach((cell) => cell.addEventListener('click', () => {
        cell.textContent = turn === isPlayerOTurn ? 'X' : 'O'
    }))
}
//announce whose turn it is
function switchTurn() {
    turn === isPlayerOTurn ? 'O' : 'X';
    message.textContent = `${turn}'s turn`
}
//checkWinner by winConditions

function startGame() {
    appendChoice()
    switchTurn();
}

startGame()