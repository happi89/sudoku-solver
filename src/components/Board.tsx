import {
	Box,
	Button,
	Center,
	createStyles,
	Flex,
	Group,
	NumberInput,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { showNotification } from '@mantine/notifications';
import { IconX } from '@tabler/icons';
import { useState } from 'react';
import { modifyBoard } from '../functions/functions';

const useStyles = createStyles((theme) => ({
	borderRow: {
		borderRight:
			theme.colorScheme === 'light' ? '2px solid black' : '2px solid white',
	},
	borderCell: {
		borderTop:
			theme.colorScheme === 'light' ? '2px solid black' : '2px solid white',
	},
}));

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

	const matches = useMediaQuery('(min-width: 767px)', true, {
		getInitialValueInEffect: false,
	});
	const { classes } = useStyles();

	const solveBoard = (board: number[][]) => {
		const solvedBoard = modifyBoard(board);
		if (solvedBoard === false) {
			return showNotification({
				message: 'The following Sudoku puzzle is Invalid',
				color: 'red',
				icon: <IconX size={18} />,
				title: 'Error',
			});
		}
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
					{board?.map((row, rowIndex) => {
						return (
							<Box
								key={rowIndex}
								className={
									(rowIndex + 1) % 3 === 0 && rowIndex !== 8
										? classes.borderRow
										: ''
								}>
								{row.map((cell, colIndex) => (
									<NumberInput
										className={
											colIndex % 3 === 0 && colIndex !== 0
												? classes.borderCell
												: ''
										}
										value={cell}
										key={colIndex}
										min={0}
										max={9}
										hideControls
										error={cell > 9 || cell < 0}
										onChange={(val) =>
											// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
											updateBoard(rowIndex, colIndex, val!)
										}
										sx={
											matches
												? {
														input: {
															height: 48,
															width: 48,
															padding: 16,
														},
												  }
												: {
														input: {
															height: 40,
															width: 40,
															padding: 12,
														},
												  }
										}></NumberInput>
								))}
							</Box>
						);
					})}
				</Group>

				<Flex>
					<Button
						mt='lg'
						mr='xl'
						onClick={() => {
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
							]);
						}}>
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
