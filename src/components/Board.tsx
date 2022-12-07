import NumInput from './NumInput';
import { Box, Button, Divider, Flex, Group, NumberInput } from '@mantine/core';
import { useState } from 'react';
import { initiate } from '../functions/functions';

const Board = () => {
	const [board, setBoard] = useState<number[][]>([
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
	]);

	const solveBoard = (board: number[][]) => {
		const solvedBoard = initiate(board);
		console.log(solvedBoard);
	};

	const updateBoard = (rowIndex: number, colIndex: number, value: number) => {
		const newBoard = [...board];
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		newBoard[rowIndex]![colIndex] = value;
		setBoard(newBoard);
	};

	return (
		<>
			<Group spacing={0}>
				{board.map((row, rowIndex) => {
					return (
						<Box key={rowIndex}>
							{row.map((cell, colIndex) => (
								<NumberInput
									defaultValue={cell}
									key={colIndex}
									min={1}
									max={9}
									hideControls
									// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
									onChange={(val) => updateBoard(rowIndex, colIndex, val!)}
									styles={{
										input: {
											width: 40,
										},
									}}></NumberInput>
							))}
						</Box>
					);
				})}
			</Group>
			<Button mt='lg' onClick={() => solveBoard(board)}>
				Solve
			</Button>
		</>
	);
};

export default Board;
