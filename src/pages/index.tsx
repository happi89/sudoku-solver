import { type NextPage } from 'next';
import { Button, Text } from '@mantine/core';
import { signIn, useSession } from 'next-auth/react';

const Home: NextPage = () => {
	const { data: session } = useSession();
	return (
		<>
			{session ? (
				<Text>Hi {session?.user?.name}</Text>
			) : (
				<Button onClick={() => signIn('discord')}>Login</Button>
			)}
		</>
	);
};

export default Home;
