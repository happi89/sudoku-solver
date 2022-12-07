import { Header, Flex, Text } from '@mantine/core';
const Navbar = () => {
	return (
		<Header height={56} mb={100}>
			<Flex align='center' justify='center' pt='xs'>
				<Text size='xl' weight='bold' color='blue'>
					Sodoku Solver
				</Text>
			</Flex>
		</Header>
	);
};

export default Navbar;
