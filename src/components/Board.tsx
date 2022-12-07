import {
	Box,
	Button,
	Center,
	Container,
	Divider,
	Flex,
	Group,
	NumberInput,
	Text,
} from '@mantine/core';
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

	console.log(board);

	const solveBoard = (board: number[][]) => {
		const solvedBoard = initiate(board);
		setBoard(solvedBoard);
	};

	const updateBoard = (rowIndex: number, colIndex: number, value: number) => {
		const newBoard = [...board];
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		newBoard[rowIndex]![colIndex] = value;
		setBoard(newBoard);
	};

	return (
		<Center>
			<Flex direction='column'>
				<Group spacing={0}>
					{board.map((row, rowIndex) => {
						return (
							<Box key={rowIndex}>
								{row.map((cell, colIndex) => (
									<NumberInput
										value={cell}
										key={colIndex}
										min={1}
										max={9}
										hideControls
										error={cell > 9 || cell < 0}
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
				<Flex>
					<Button
						mt='lg'
						mr='xl'
						onClick={() =>
							setBoard([
								[0, 0, 0, 0, 0, 0, 0, 0, 0],
								[0, 0, 0, 0, 0, 0, 0, 0, 0],
								[0, 0, 0, 0, 0, 0, 0, 0, 0],
								[0, 0, 0, 0, 0, 0, 0, 0, 0],
								[0, 0, 0, 0, 0, 0, 0, 0, 0],
								[0, 0, 0, 0, 0, 0, 0, 0, 0],
								[0, 0, 0, 0, 0, 0, 0, 0, 0],
								[0, 0, 0, 0, 0, 0, 0, 0, 0],
								[0, 0, 0, 0, 0, 0, 0, 0, 0],
							])
						}>
						Clear
					</Button>
					<Button mt='lg' onClick={() => solveBoard(board)}>
						Solve
					</Button>
				</Flex>
			</Flex>
		</Center>
	);
};

export default Board;
