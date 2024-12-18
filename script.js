document.addEventListener("DOMContentLoaded", () => {
	const gridDisplay = document.querySelector(".grid-container");
	const scoreDisplay = document.getElementById("score");
	const width = 4;
	let squares = [];
	let score = 0;

	function startGame() {
		createBoard();
		ceroFiller();
		generate();
		generate();
		document.addEventListener("keyup", control);
	}

	function createBoard() {
		for (let i = 0; i < width * width; i++) {
			let square = document.createElement("div");
			square.classList.add("grid-cell");
			gridDisplay.appendChild(square);
			squares.push(square);
		}
	}

	function ceroFiller() {
		squares.forEach((cell) => {
			cell.innerHTML = 0;
		});
	}

	function generate() {
		const emptyCells = squares.filter((cell) => cell.innerHTML == 0);
		if (emptyCells.length > 0) {
			const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
			const randomNumber = Math.random() < 0.5 ? 2 : 4;
			randomCell.innerHTML = randomNumber;
			updateCells();
		}
	}

	function updateCells() {
		squares.forEach(cell => {
			const value = parseInt(cell.innerHTML);
			cell.className = 'grid-cell';

			if (value > 0) {
				cell.classList.add(`cell-${value}`);
			} else {
				cell.classList.add('cell-0');
			}
		});
	}

	function moveRight() {
		for (let i = 0; i < width * width; i++) {
			if (i % width === 0) {
				let totalOne = squares[i].innerHTML;
				let totalTwo = squares[i + 1].innerHTML;
				let totalThree = squares[i + 2].innerHTML;
				let totalFour = squares[i + 3].innerHTML;
				let row = [
					parseInt(totalOne),
					parseInt(totalTwo),
					parseInt(totalThree),
					parseInt(totalFour),
				];

				let filteredRow = row.filter((num) => num);
				let missing = 4 - filteredRow.length;
				let zeros = Array(missing).fill(0);
				let newRow = zeros.concat(filteredRow);

				squares[i].innerHTML = newRow[0];
				squares[i + 1].innerHTML = newRow[1];
				squares[i + 2].innerHTML = newRow[2];
				squares[i + 3].innerHTML = newRow[3];
			}
		}
	}

	function moveLeft() {
		for (let i = 0; i < width * width; i++) {
			if (i % width === 0) {
				let totalOne = squares[i].innerHTML;
				let totalTwo = squares[i + 1].innerHTML;
				let totalThree = squares[i + 2].innerHTML;
				let totalFour = squares[i + 3].innerHTML;
				let row = [
					parseInt(totalOne),
					parseInt(totalTwo),
					parseInt(totalThree),
					parseInt(totalFour),
				];

				let filteredRow = row.filter((num) => num);
				let missing = 4 - filteredRow.length;
				let zeros = Array(missing).fill(0);
				let newRow = filteredRow.concat(zeros);

				squares[i].innerHTML = newRow[0];
				squares[i + 1].innerHTML = newRow[1];
				squares[i + 2].innerHTML = newRow[2];
				squares[i + 3].innerHTML = newRow[3];
			}
		}
	}

	function moveDown() {
		for (let i = 0; i < width; i++) {
			let totalOne = squares[i].innerHTML;
			let totalTwo = squares[i + width].innerHTML;
			let totalThree = squares[i + width * 2].innerHTML;
			let totalFour = squares[i + width * 3].innerHTML;
			let column = [
				parseInt(totalOne),
				parseInt(totalTwo),
				parseInt(totalThree),
				parseInt(totalFour),
			];

			let filteredColumn = column.filter((num) => num);
			let missing = 4 - filteredColumn.length;
			let zeros = Array(missing).fill(0);
			let newColumn = zeros.concat(filteredColumn);

			squares[i].innerHTML = newColumn[0];
			squares[i + width].innerHTML = newColumn[1];
			squares[i + width * 2].innerHTML = newColumn[2];
			squares[i + width * 3].innerHTML = newColumn[3];
		}
	}

	function moveUp() {
		for (let i = 0; i < width; i++) {
			let totalOne = squares[i].innerHTML;
			let totalTwo = squares[i + width].innerHTML;
			let totalThree = squares[i + width * 2].innerHTML;
			let totalFour = squares[i + width * 3].innerHTML;
			let column = [
				parseInt(totalOne),
				parseInt(totalTwo),
				parseInt(totalThree),
				parseInt(totalFour),
			];

			let filteredColumn = column.filter((num) => num);
			let missing = 4 - filteredColumn.length;
			let zeros = Array(missing).fill(0);
			let newColumn = filteredColumn.concat(zeros);

			squares[i].innerHTML = newColumn[0];
			squares[i + width].innerHTML = newColumn[1];
			squares[i + width * 2].innerHTML = newColumn[2];
			squares[i + width * 3].innerHTML = newColumn[3];
		}
	}

		function combineRow(direction) {
		if (direction === 'right') {
			for (let i = width * width - 1; i >= 0; i--) {
				if (i % width !== 0) {
					if (squares[i].innerHTML === squares[i - 1].innerHTML) {
						let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i - 1].innerHTML);
						squares[i].innerHTML = combinedTotal;
						squares[i - 1].innerHTML = 0;
						score += combinedTotal;
						scoreDisplay.innerHTML = score;
					}
				}
			}
		} else if (direction === 'left') {
			for (let i = 0; i < width * width - 1; i++) {
				if (i % width !== width - 1) {
					if (squares[i].innerHTML === squares[i + 1].innerHTML) {
						let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i + 1].innerHTML);
						squares[i].innerHTML = combinedTotal;
						squares[i + 1].innerHTML = 0;
						score += combinedTotal;
						scoreDisplay.innerHTML = score;
					}
				}
			}
		}
		updateCells();
	}
	
	function combineColumn(direction) {
		if (direction === 'down') {
			for (let i = width * (width - 1) - 1; i >= 0; i--) {
				if (squares[i].innerHTML === squares[i + width].innerHTML) {
					let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i + width].innerHTML);
					squares[i].innerHTML = combinedTotal;
					squares[i + width].innerHTML = 0;
					score += combinedTotal;
					scoreDisplay.innerHTML = score;
				}
			}
		} else if (direction === 'up') {
			for (let i = 0; i < width * (width - 1); i++) {
				if (squares[i].innerHTML === squares[i + width].innerHTML) {
					let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i + width].innerHTML);
					squares[i].innerHTML = combinedTotal;
					squares[i + width].innerHTML = 0;
					score += combinedTotal;
					scoreDisplay.innerHTML = score;
				}
			}
		}
		updateCells();
	}

	function control(e) {
		if (e.keyCode === 39) {
			moveRight();
			combineRow('right');
			moveRight();
			setTimeout(() => { generate(); }, 200);
		} else if (e.keyCode === 37) {
			moveLeft();
			combineRow('left');
			moveLeft();
			setTimeout(() => { generate(); }, 200);
		} else if (e.keyCode === 38) {
			moveUp();
			combineColumn('up');
			moveUp();
			setTimeout(() => { generate(); }, 200);
		} else if (e.keyCode === 40) {
			moveDown();
			combineColumn('down');
			moveDown();
			setTimeout(() => { generate(); }, 200);
		}
		updateCells();
		checkForWin();
		checkForGameOver();
	}

	function checkForWin() {
		for (let i = 0; i < squares.length; i++) {
			if (squares[i].innerHTML == 2048) {
				alert("You win!");
				document.removeEventListener("keyup", control);
			}
		}
	}

	function checkForGameOver() {
		let zeros = 0;
		for (let i = 0; i < squares.length; i++) {
			if (squares[i].innerHTML == 0) {
				zeros++;
			}
		}
		if (zeros === 0) {
			alert("You lose!");
			document.removeEventListener("keyup", control);
		}
	}

	startGame();
});