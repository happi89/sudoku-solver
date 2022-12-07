import Row from './../components/Row';
import Navbar from './../components/Header';
import { type NextPage } from 'next';
import { Box, Container, Divider } from '@mantine/core';

const Home: NextPage = () => {
	return (
		<>
			<Navbar />
			<Container>
				{[0, 0, 0, 0, 0, 0, 0, 0, 0].map((i) => (
					<Row key={i} />
				))}
			</Container>
		</>
	);
};

export default Home;
