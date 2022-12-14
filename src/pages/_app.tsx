import Head from 'next/head';
import type { ColorScheme } from '@mantine/core';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import type { AppProps } from 'next/app';
import { NotificationsProvider } from '@mantine/notifications';

const MyApp = ({ Component, pageProps }: AppProps) => {
	const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
		key: 'mantine-color-scheme',
		defaultValue: 'light',
		getInitialValueInEffect: true,
	});

	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

	useHotkeys([['mod+J', () => toggleColorScheme()]]);

	return (
		<>
			<Head>
				<title>Sudoku Solver | Happi89</title>
				<meta name='description' content='Sudoku Solver by Happi89' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<ColorSchemeProvider
				colorScheme={colorScheme}
				toggleColorScheme={toggleColorScheme}>
				<MantineProvider
					withGlobalStyles
					withNormalizeCSS
					theme={{ colorScheme, fontFamily: 'Courier New, sans-serif' }}>
					<NotificationsProvider>
						<Component {...pageProps} />
					</NotificationsProvider>
				</MantineProvider>
			</ColorSchemeProvider>
		</>
	);
};

export default MyApp;
