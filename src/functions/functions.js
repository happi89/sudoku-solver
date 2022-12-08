export const modifyBoard = (board) => {
	const updatedBoard = board.map((row) =>
		row.map((cell) =>
			cell <= 0 || cell > 9 || cell === undefined ? (cell = null) : cell
		)
	);

	const validInput = validBoard(updatedBoard);
	if (!validInput) {
		return false;
	}

	return solveBoard(updatedBoard);
};

const solveBoard = (board) => {
	if (isSolved(board)) {
		return board;
	}

	const possibleBoards = findPossibilities(board);
	const validBoards = keepValid(possibleBoards);
	return searchForSolution(validBoards);
};

const searchForSolution = (boards) => {
	if (boards.length < 1) {
		return false;
	}

	const first = boards.shift();
	const tryPath = solveBoard(first);
	if (tryPath) {
		return tryPath;
	}
	return searchForSolution(boards);
};

const isSolved = (board) => {
	for (let row = 0; row < 9; row++) {
		for (let cell = 0; cell < 9; cell++) {
			if (board[row][cell] === null) {
				return false;
			}
		}
	}
	return true;
};

const findPossibilities = (board) => {
	let result = [];
	const firstEmptySqr = findEmptySqr(board);
	if (firstEmptySqr !== undefined) {
		const y = firstEmptySqr[0];
		const x = firstEmptySqr[1];
		for (let i = 1; i <= 9; i++) {
			const newBoard = [...board];
			const row = [...newBoard[y]];
			row[x] = i;
			newBoard[y] = row;
			result.push(newBoard);
		}
	}

	return result;
};

const findEmptySqr = (board) => {
	for (let row = 0; row < 9; row++) {
		for (let cell = 0; cell < 9; cell++) {
			if (board[row][cell] === null) {
				return [row, cell];
			}
		}
	}
};

const keepValid = (boards) => {
	let result = [];
	for (let board = 0; board < boards.length; board++) {
		if (validBoard(boards[board])) {
			result.push(boards[board]);
		}
	}
	return result;
};

const validBoard = (board) => {
	return rowsValid(board) && columnsValid(board) && boxesValid(board);
};

function rowsValid(board) {
	for (let row = 0; row < 9; row++) {
		let current = [];
		for (let n = 0; n < 9; n++) {
			if (current.includes(board[row][n])) {
				return false;
			} else if (board[row][n] !== null) {
				current.push(board[row][n]);
			}
		}
	}
	return true;
}

function columnsValid(board) {
	for (let col = 0; col < 9; col++) {
		let current = [];
		for (let n = 0; n < 9; n++) {
			if (current.includes(board[n][col])) {
				return false;
			} else if (board[n][col] !== null) {
				current.push(board[n][col]);
			}
		}
	}
	return true;
}

function boxesValid(board) {
	const boxCoordinates = [
		[0, 0],
		[0, 1],
		[0, 2],
		[1, 0],
		[1, 1],
		[1, 2],
		[2, 0],
		[2, 1],
		[2, 2],
	];

	for (let y = 0; y < 9; y += 3) {
		for (let x = 0; x < 9; x += 3) {
			let current = [];
			for (let i = 0; i < 9; i++) {
				let coordinates = [...boxCoordinates[i]];
				coordinates[0] += y;
				coordinates[1] += x;
				if (current.includes(board[coordinates[0]][coordinates[1]])) {
					return false;
				} else if (board[coordinates[0]][coordinates[1]] !== null) {
					current.push(board[coordinates[0]][coordinates[1]]);
				}
			}
		}
	}
	return true;
}
