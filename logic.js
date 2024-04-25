let players = ['x', 'o']
let activePlayer = 0
let board = []

function startGame() {
 board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
]
  activePlayer = 0
  renderBoard(board)
}

function click(row, col) {
  board[row][col] = players[activePlayer]
  renderBoard(board)
  let hasWinner = checkWin(row, col)
  if (hasWinner) {
    showWinner(activePlayer)
  } else {
   activePlayer = (activePlayer === 0) ? 1 : 0
  }
}

function checkWin(row, col) {
  let playerSymbol = players[activePlayer]
  if (board[row].every(val => val === playerSymbol)) {
    return true;
  }
  if (board.every(row => row[col] === playerSymbol)) {
    return true;
  }
  if (row === col && board.every((row, index) => row[index] === playerSymbol)) {
    return true;
  }
  if (row + col && board.length - 1 && board.every((row, index) => row[board.length - 1 - index] === playerSymbol)) {
    return true;
  }
}