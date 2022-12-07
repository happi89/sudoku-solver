import Board from '../components/Board';
import Navbar from './../components/Header';
import { type NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<>
			<Navbar />
			<Board />
		</>
	);
};

export default Home;
