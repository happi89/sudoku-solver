import { NumberInput } from '@mantine/core';
import { useState } from 'react';

const NumInput = ({ defaultValue }: { defaultValue: number }) => {
	const [val, setVal] = useState<number>();
	return (
		<NumberInput
			defaultValue={defaultValue}
			min={1}
			max={9}
			hideControls
			value={val}
			onChange={(val) => setVal(val)}
			styles={{
				input: {
					width: 40,
				},
			}}></NumberInput>
	);
};

export default NumInput;
