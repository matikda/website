// Game constants
const ROWS = 4;
const COLS = 4;
const TILE_SIZE = 100;
const GAP_SIZE = 10;
const BOARD_SIZE = TILE_SIZE * ROWS + GAP_SIZE * (ROWS - 1);
const TILE_VALUES = [
  "zendaya1.jpg",
  "zendaya2.jpg",
  "zendaya3.jpg",
  "zendaya4.jpg",
  "zendaya5.jpg",
  "zendaya6.jpg",
  "zendaya7.jpg",
  "zendaya8.jpg",
  "zendaya9.jpg",
  "zendaya10.jpg",
  "zendaya11.jpg",
  "zendaya12.jpg",
  "zendaya13.jpg",
  "zendaya14.jpg",
  "zendaya15.jpg",
  "zendaya16.jpg"
];

// Game state
let board = [];
let score = 0;
let gameOver = false;

// Create game board
function createBoard() {
  for (let i = 0; i < ROWS; i++) {
    board[i] = [];
    for (let j = 0; j < COLS; j++) {
      board[i][j] = null;
    }
  }
}

// Add a new tile to the board
function addTile() {
  let emptyTiles = [];
  for (let i = 0;
