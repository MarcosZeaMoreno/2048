document.addEventListener('DOMContentLoaded', () => {
  // Variables
  const gridDisplay = document.querySelector('.grid-container');
  const scoreDisplay = document.getElementById('score');
  const width = 4;
  let squares = [];
  let score = 0;

  function startGame() {
	ceroFiller();
	generate();
	generate();
  }

  function ceroFiller() {
  const gridCells = document.querySelectorAll('.grid-cell');
  gridCells.forEach(cell => {
    cell.innerHTML = 0;
  });
}

  function generate() {
  const emptyCells = Array.from(document.querySelectorAll('.grid-cell')).filter(cell => cell.innerHTML == 0);
  if (emptyCells.length > 0) {
    const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    randomCell.innerHTML = 2;
  }
}

  // Mover celdas
  function moveRight() {
    // Lógica para mover celdas a la derecha
  }

  function moveLeft() {
    // Lógica para mover celdas a la izquierda
  }

  function moveDown() {
    // Lógica para mover celdas hacia abajo
  }

  function moveUp() {
    // Lógica para mover celdas hacia arriba
  }

  // Combinar celdas
  function combineRow() {
    // Lógica para combinar celdas en una fila
  }

  function combineColumn() {
    // Lógica para combinar celdas en una columna
  }

  // Asignar controles de teclado
  function control(e) {
    // Lógica para manejar los controles de teclado
  }

  // Verificar si el jugador ha ganado
  function checkForWin() {
    // Lógica para verificar si el jugador ha ganado
  }

  // Verificar si el juego ha terminado
  function checkForGameOver() {
    // Lógica para verificar si el juego ha terminado
  }

  // Inicializar el tablero
  startGame();
});