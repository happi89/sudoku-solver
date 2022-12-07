import type { Board, Row } from '../types/types';

export const solve = (board: Board) => {
	if (isSolved(board)) {
		return board;
	}

	const possibilities = findPossibilities(board);
	const validBoards = keepOnlyValid(possibilities);
	return searchForSolution(validBoards);
};

const searchForSolution = (boards) => {
	if (boards.length < 1) {
		return false;
	}

	const first: Board = boards.shift();
	const tryPath: boolean = solve(first);
	if (tryPath) {
		return tryPath;
	} else {
		return searchForSolution(boards);
	}
};

const isSolved = (board: Board) => {
	const solved = board.map((i: Row) =>
		i.map((j: number) => (j !== null ? true : false))
	);
	return solved ? true : false;
};

const findPossibilities = (board: Board) => {
	let res: Row = [];
	const firstEmptySqr = findEmptySqr(board);
	if (!firstEmptySqr) {
		const y = firstEmptySqr[0];
		const xdd = firstEmptySqr[1];
	}

	return res;
};
