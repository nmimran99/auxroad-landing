import "tailwindcss/tailwind.css";
import Head from "next/head";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;1,400&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
