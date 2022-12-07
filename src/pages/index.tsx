import Board from '../components/Board';
import Navbar from './../components/Header';
import { type NextPage } from 'next';
import { Box, Container, Divider } from '@mantine/core';

const Home: NextPage = () => {
	return (
		<>
			<Navbar />
			<Container>
				<Board />
			</Container>
		</>
	);
};

export default Home;
