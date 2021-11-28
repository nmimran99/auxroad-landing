import Link from "next/link";
import EmailInput from "./EmailInput";
const tabs = [
	{
		href: "/about",
		label: "About us",
	},
	{
		href: "/careers",
		label: "Careers",
	},
	{
		href: "/contact",
		label: "Contact us",
	},
	{
		href: "/",
		label: "Students",
	},
	{
		href: "/institutions",
		label: "Institutions",
	},
	{
		href: "/partners",
		label: "Partners",
	},
];

export default function Footer() {
	return (
		<div className="h-auto w-screen bg-gray-800 ">
			<div className="h-auto w-screen flex flex-col md:flex-row md:justify-evenly">
				<div className="py-16 w-full md:w-auto ">
					<img src="auxroadlogo.png" className="h-8 lg:h-10 w-auto m-4" />
					<div className="px-16 grid grid-cols-2 md:grid-cols-1 md:px-20">
						{tabs.map((tab, i) => {
							return (
								<Link href={tab.href} key={i}>
									<div className="text-gray-100 py-2">{tab.label}</div>
								</Link>
							);
						})}
					</div>
				</div>
				<div
					className="py-4 px-8 w-84 md:w-96 md:px-4
                 my-auto pb-16"
				>
					<EmailInput
						border="border-2 ring-2 ring-white border-gray-400"
						content="Get updates and news about us"
						textColor="text-gray-100"
					/>
				</div>
			</div>
		</div>
	);
}
