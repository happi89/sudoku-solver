import { NumberInput } from '@mantine/core';
import { useEffect, useState } from 'react';

const NumInput = ({
	defaultValue,
	rowIndex,
	colIndex,
	updateBoard,
}: {
	defaultValue: number;
	rowIndex: number;
	colIndex: number;
	updateBoard: (rowIndex: number, colIndex: number, value: number) => void;
}) => {
	const [value, setVal] = useState(defaultValue);

	useEffect(() => {
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);

	return (
		<NumberInput
			defaultValue={0}
			min={1}
			max={9}
			hideControls
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			onChange={(val) => setVal(val!)}
			styles={{
				input: {
					width: 40,
				},
			}}></NumberInput>
	);
};

export default NumInput;
