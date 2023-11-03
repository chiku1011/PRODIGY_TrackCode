let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function handleCellClick(cell) {
  const cellIndex = cell.id;
  if (gameBoard[cellIndex] !== "" || !gameActive) return;

  gameBoard[cellIndex] = currentPlayer;
  cell.innerText = currentPlayer;
  
  if (checkWin()) {
    document.getElementById("message").innerText = `Player ${currentPlayer} wins!`;
    gameActive = false;
    return;
  }

  if (checkDraw()) {
    document.getElementById("message").innerText = "It's a draw!";
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWin() {
  return winningCombos.some(combo => {
    return combo.every(index => gameBoard[index] === currentPlayer);
  });
}

function checkDraw() {
  return !gameBoard.includes("");
}

function resetBoard() {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  currentPlayer = "X";
  document.getElementById("message").innerText = "";
  document.querySelectorAll(".cell").forEach(cell => cell.innerText = "");
}

document.getElementById("board").addEventListener("click", event => {
  handleCellClick(event.target);
});
