import { Html, Head, Main, NextScript } from 'next/document';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body>
				<Navbar />
				<Main />
				<Footer />
				<NextScript />
			</body>
		</Html>
	);
}
