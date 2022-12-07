const b = null;

const bd1 = [
	[1, 2, 3, 4, 5, 6, 7, 8, 9],
	[1, 2, 3, 4, 5, 6, 7, 8, 9],
	[1, 2, 3, 4, 5, 6, 7, 8, 9],
	[1, 2, 3, 4, 5, 6, 7, 8, 9],
	[1, 2, 3, 4, 5, 6, 7, 8, 9],
	[1, 2, 3, 4, 5, 6, 7, 8, 9],
	[1, 2, 3, 4, 5, 6, 7, 8, 9],
	[1, 2, 3, 4, 5, 6, 7, 8, 9],
	[1, 2, 3, 4, 5, 6, 7, 8, 9],
];

const bd2 = [
	[b, b, b, b, b, b, b, b, b],
	[b, b, b, b, b, b, b, b, b],
	[b, b, b, b, b, b, b, b, b],
	[b, b, b, b, b, b, b, b, b],
	[b, b, b, b, b, b, b, b, b],
	[b, b, b, b, b, b, b, b, b],
	[b, b, b, b, b, b, b, b, b],
	[b, b, b, b, b, b, b, b, b],
	[b, b, b, b, b, b, b, b, b],
];

const bd3 = [
	[b, b, b, b, b, 8, 9, 1, b],
	[b, b, 1, b, b, b, b, b, 3],
	[9, b, b, b, 2, 7, b, b, 5],
	[3, b, 2, 5, 6, b, b, b, b],
	[5, b, b, b, b, b, b, b, 8],
	[b, b, b, b, 8, 3, 5, b, 4],
	[8, b, b, 7, 4, b, b, b, 2],
	[6, b, b, b, b, b, 1, b, b],
	[b, 5, 7, 3, b, b, b, b, b],
];

const bd4 = [
	[1, 2, 3, 4, 5, 6, 7, 8, b],
	[b, b, b, b, b, b, b, b, 2],
	[b, b, b, b, b, b, b, b, 3],
	[b, b, b, b, b, b, b, b, 4],
	[b, b, b, b, b, b, b, b, 5],
	[b, b, b, b, b, b, b, b, 6],
	[b, b, b, b, b, b, b, b, 7],
	[b, b, b, b, b, b, b, b, 8],
	[b, b, b, b, b, b, b, b, 9],
];

const solve = (board) => {
	if (isSolved(board)) {
		return board;
	}

	const possibilities = findPossibilities(board);
	const validBoards = keepValid(possibilities);
	return searchForSolution(validBoards);
};

const searchForSolution = (boards) => {
	if (boards.length < 1) {
		return false;
	}

	const first = boards.shift();
	const tryPath = solve(first);
	if (tryPath) {
		return tryPath;
	}
	return searchForSolution(boards);
};

const isSolved = (board) => {
	for (var i = 0; i < 9; i++) {
		for (var j = 0; j < 9; j++) {
			if (board[i][j] == null) {
				return false;
			}
		}
	}
	return true;
};

const findPossibilities = (board) => {
	let res = [];
	const firstEmptySqr = findEmptySqr(board);
	if (firstEmptySqr !== undefined) {
		const y = firstEmptySqr[0];
		const x = firstEmptySqr[1];
		for (let i = 0; i <= 9; i++) {
			const newBoard = [...board];
			const row = [...newBoard[y]];
			row[x] = i;
			newBoard[y] = row;
			res.push(newBoard);
		}
	}

	return res;
};

const findEmptySqr = (board) => {
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (board[i][j] == null) {
				return [i, j];
			}
		}
	}
};

const keepValid = (boards) => {
	let res = [];
	for (let i = 0; i < boards.length; i++) {
		if (validBoard(boards[i])) {
			res.push(boards[i]);
		}
	}
	return res;
};

const validBoard = (board) => {
	return rowsValid(board) && columnsValid(board) && boxesValid(board);
};

function rowsValid(board) {
	for (let i = 0; i < 9; i++) {
		let cur = [];
		for (let j = 0; j < 9; j++) {
			if (cur.includes(board[i][j])) {
				return false;
			} else if (board[i][j] != null) {
				cur.push(board[i][j]);
			}
		}
	}
	return true;
}

function columnsValid(board) {
	for (let i = 0; i < 9; i++) {
		let cur = [];
		for (let j = 0; j < 9; j++) {
			if (cur.includes(board[j][i])) {
				return false;
			} else if (board[j][i] != null) {
				cur.push(board[j][i]);
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
			let cur = [];
			for (let i = 0; i < 9; i++) {
				let coordinates = [...boxCoordinates[i]];
				coordinates[0] += y;
				coordinates[1] += x;
				if (cur.includes(board[coordinates[0]][coordinates[1]])) {
					return false;
				} else if (board[coordinates[0]][coordinates[1]] != null) {
					cur.push(board[coordinates[0]][coordinates[1]]);
				}
			}
		}
	}
	return true;
}
