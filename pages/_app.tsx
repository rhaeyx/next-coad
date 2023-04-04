import { Montserrat, Playfair_Display } from 'next/font/google';
import type { AppProps } from 'next/app';

import '@/styles/globals.css';

const montserrat = Montserrat({
	subsets: ['latin'],
});

const playfair = Playfair_Display({
	subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<style jsx global>
				{`
					:root {
						--montserrat-font: ${montserrat.style};
						--playfair-font: ${playfair.style};
					}
				`}
			</style>
			<Component {...pageProps} />
		</>
	);
}
