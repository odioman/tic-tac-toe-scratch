const cells = document.querySelectorAll(".cell");
const restartBtn = document.querySelector(".restart");
const message = document.querySelector(".message");
const winConditions = [
    //nested array of possible winning moves on the board in array format
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let board = ['','','','','','','','',''];
let click = 0;

function startGame() {
    appendChoice();
    //add click event to restartBtn in order to restart game
    restartBtn.addEventListener('click', restartGame);
}

//append X's and O's to board
function appendChoice() {
    //add event listener to all the cells, handleCellClick
    cells.forEach((cell) => cell.addEventListener('click', handleCellClick))
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
    updateBoard(cell.id, cell.textContent);
    checkWinner()
    cantClick(cell);
}
    
//update board array with Xs and Os in order to find winning combo 
//call after X or O click 
/**
 * @param {string} id - cell id  
 * @param {string} textContent - X or O
 */
function updateBoard(id, textContent) {
    board[id] = textContent;
}

//
// checkWinner() should run after every turn, ie every click on a box;
//checkWinner by winConditions
function checkWinner() {
    for (let i = 0; i < winConditions.length; i++) {
        const conditions = winConditions[i];
        const cellA = board[conditions[0]];
        const cellB = board[conditions[1]];
        const cellC = board[conditions[2]];
        //if any are empty, keep playing
        if (cellA == '' || cellB == '' || cellC == '') {
            continue;
        }
        //if the same mark is in cellA, cellB, cellC, win game
        if (cellA == cellB && cellB == cellC) {
            message.textContent = `${cellA} Wins!`
            //prevent additional Xs and Os from the game after a win
            cells.forEach(cell => cell.removeEventListener('click', handleCellClick));
            break;
            //if no empty strings on board, and no winner, then draw
        } else if (!board.includes('')) {
            message.textContent = "Draw!"
        } 
    }
}

function restartGame() {
    //clear out textContent of each cell
    cells.forEach(cell => cell.textContent = '');
    //reset click to 0 
    click = 0;
    //reset message
    message.textContent = '';
    //board reset
    board = ['','','','','','','','','']
    startGame();
    
}

//can't click on a square occupied by X or O, called after click on a cell
function cantClick(cell) {
    // remove event listener from cell that has just been clicked so that new X or O cannot append to cell
    cell.removeEventListener('click', handleCellClick);
}

startGame();
