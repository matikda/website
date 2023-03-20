// Game constants
const ROWS = 4;
const COLS = 4;
const TILE_SIZE = 100;
const GAP_SIZE = 10;
const BOARD_SIZE = TILE_SIZE * ROWS + GAP_SIZE * (ROWS - 1);
const TILE_VALUES = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
  "img9.jpg",
  "img10.jpg",
  "img11.jpg",
  "img12.jpg",
  "img13.jpg",
  "img14.jpg",
  "img15.jpg",
  "img16.jpg"
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
