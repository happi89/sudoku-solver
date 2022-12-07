import NumInput from './NumInput';
import { Box, Divider, Group } from '@mantine/core';
import { useState } from 'react';

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

	return (
		<Group spacing={0}>
			{board.map((row, i) => {
				return (
					<Box key={i}>
						{row.map((cell, i) => (
							<NumInput key={i} />
						))}
					</Box>
				);
			})}
		</Group>
	);
};

export default Board;
