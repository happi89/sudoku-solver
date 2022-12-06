import { type AppType } from 'next/app';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

import { trpc } from '../utils/trpc';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';

const MyApp: AppType<{ session: Session | null }> = ({
	Component,
	pageProps: { session, ...pageProps },
}) => {
	return (
		<>
			<Head>
				<title>Sudoku Solver</title>
				<meta name='description' content='Generated by create-t3-app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<SessionProvider session={session}>
				<MantineProvider
					withGlobalStyles
					withNormalizeCSS
					theme={{
						/** Put your mantine theme override here */
						colorScheme: 'light',
					}}>
					<Component {...pageProps} />
				</MantineProvider>
			</SessionProvider>
		</>
	);
};

export default trpc.withTRPC(MyApp);
