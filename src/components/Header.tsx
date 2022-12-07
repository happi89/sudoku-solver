import { Header, Flex, Text } from '@mantine/core';
import ToggleTheme from './ToggleTheme';
const Navbar = () => {
	return (
		<Header height={56} mb={100}>
			<Flex justify='center' align='center' pt='sm' gap='xl'>
				<Text size='xl' weight='bold' color='blue'>
					Sudoku Solver
				</Text>
				<ToggleTheme />
			</Flex>
		</Header>
	);
};

export default Navbar;
