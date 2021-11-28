import PointsSummary from "../components/home/PointsSummary";
import Relationships from "../components/home/Relationships";
import Top from "../components/home/Top";
import WeBring from "../components/home/WeBring";
import WhatDoWeDo from "../components/home/WhatDoWeDo";
import Divider from "../components/misc/Divider";
import Footer from "../components/misc/Footer";

export default function Home() {
	return (
		<div className="m-0 p-0 w-screen static">
			<Top />
			<WhatDoWeDo />
			<PointsSummary />
			<Divider styles="w-1/2 px-2 mx-auto my-16 lg:my-24 xl:w-1/4" />
			<WeBring />
			<Divider styles="w-1/2 px-2 mx-auto my-8 lg:my-24 xl:w-1/4" />
			<Relationships />
		</div>
	);
}
