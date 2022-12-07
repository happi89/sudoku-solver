import { Divider, Group, NumberInput } from '@mantine/core';

const Row = () => {
	return (
		<Group spacing={0}>
			{[0, 0, 0, 0, 0, 0, 0, 0, 0].map((i) => (
				<NumberInput
					key={i}
					min={1}
					max={9}
					hideControls
					styles={{
						input: {
							width: 40,
						},
					}}></NumberInput>
			))}
		</Group>
	);
};

export default Row;
