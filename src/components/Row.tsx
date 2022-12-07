import NumInput from './NumInput';
import { Divider, Group } from '@mantine/core';

const Row = () => {
	return (
		<Group spacing={0}>
			{[0, 0, 0, 0, 0, 0, 0, 0, 0].map((i) => (
				<NumInput i={i} />
			))}
		</Group>
	);
};

export default Row;
