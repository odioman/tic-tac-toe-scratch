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
let currentPlayer;
let click = 0;

//append X's and O's to board
function appendChoice() {
  
}



startGame()

function startGame() {
    appendChoice();
    gameRunning = true;
    checkWinner();
    restartBtn.addEventListener('click', restartGame);
    
}

//clickHandler
function handleCellClick(event) {
    const cell = event.currentTarget;
    if (click % 2 !== 0) {
        cell.textContent = 'O';
        message.textContent = "X's Turn";        
    } else if (click % 2 === 0) {
        cell.textContent = 'X';
        message.textContent = "O's Turn"
    }
    click++
    console.log(click);
    console.log(cell);
}
    cells.forEach((cell) => cell.addEventListener('click', handleCellClick))

//can't click on a square occupied by X or O
function cantClick() {
    //cells.forEach((cell) => cell.removeEventListener('click', handleCellClick))
    console.log("cantClick");
}

//checkWinner by winConditions
function checkWinner() {
    let roundWon = false;
    for (let i = 0; i < winConditions.length; i++) {
        const conditions = winConditions[i];
        const cellA = board[conditions[0]];
        const cellB = board[conditions[1]];
        const cellC = board[conditions[2]];

        if (cellA == '' || cellB == '' || cellC == '') {
            continue;
        }
        if (cellA == cellB && cellB == cellC) {
            roundWon = true;
            break;
        }

        if (roundWon) {
            message.textContent = `${cellA.textContent} Wins!`
            gameRunning = false;
            console.log("winning")
        } else if (!board.includes('')) {
            message.textContent = "Draw!"
            gameRunning = false;
        } 
    }
}

function restartGame() {
    cells.forEach(cell => cell.textContent = '');
    click = 0;
    message.textContent = '';
    
}

cantClick();