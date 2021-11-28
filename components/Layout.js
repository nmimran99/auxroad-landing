import Footer from "./misc/Footer";
import Navbar from "./navbar/Navbar";

export default function Layout({ children }) {
	return (
		<div className="w-full flex flex-col justify-center">
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}
